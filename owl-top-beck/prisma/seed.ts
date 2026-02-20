import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// ============================================================
// ТИПЫ ДАННЫХ (для TypeScript)
// ============================================================
type SubcategoryData = {
  slug: string;
  name: string;
};

type CourseContentData = {
  name: string;
  price: number;
  discount: number;
  creditMonthly: number;
  description: string;
  advantages: string;
  flaws: string;
  documentType: string;
  difficulty: string;
  duration: string;
  JobGuarantee: boolean;
};

// ============================================================
// ДАННЫЕ ДЛЯ ЗАПОЛНЕНИЯ
// ============================================================

// 1. Подкатегории (финальные элементы меню)
const SUBCATEGORIES: Record<string, SubcategoryData[]> = {
  
  
};

// 2. Данные курсов (по slug подкатегории)
const CONTENT_DATA: Record<string, CourseContentData> = {
  photoshop: {
    name: 'Профессия дизайнер от 0 до PRO',
    price: 24000,
    discount: 10000,
    creditMonthly: 5000,
    description: 'Студенты освоят профессиональную работу с графическими редакторами',
    advantages: 'Хорошо структурированный курс, практические задания',
    flaws: 'Некоторые темы требуют дополнительного изучения',
    documentType: 'Диплом',
    difficulty: 'Начальная',
    duration: '5 месяцев',
    JobGuarantee: true,
  },
  'javascript': {
    name: 'JavaScript с нуля до профи',
    price: 30000,
    discount: 10000,
    creditMonthly: 6500,
    description: 'Полное погружение в язык веб-разработки',
    advantages: 'Основа веб-разработки, высокий спрос',
    flaws: 'Большой объем материала',
    documentType: 'Диплом',
    difficulty: 'Начальная',
    duration: '6 месяцев',
    JobGuarantee: true,
  },
  // Добавьте остальные курсы по мере необходимости
};

// ============================================================
// ОСНОВНАЯ ФУНКЦИЯ
// ============================================================

async function main() {
  console.log('🌱 Начинаем заполнение базы данных...');

  // Шаг 1: Создаем тип контента "Курсы"
  const contentType = await prisma.contentType.upsert({
    where: { type: 'Goods' },
    update: {}, // Если существует — ничего не обновляем
    create: {
      type: 'courses',
      label: 'Курсы',
    },
  });
  console.log(`✅ Тип контента: ${contentType.label}`);

  // Шаг 2: Создаем категории для курсов
  const categoryNames = ['ДИЗАЙН'];

  for (const catName of categoryNames) {
    const category = await prisma.category.upsert({
      where: { name: catName },
      update: {},
      create: {
        name: catName,
        contentTypeId: contentType.id,
      },
    });
    console.log(`  📌 Категория: ${category.name}`);

    // Шаг 3: Создаем подкатегории
    const subcategoriesData = SUBCATEGORIES[catName] || [];

    for (const subData of subcategoriesData) {
      const subcategory = await prisma.subcategory.upsert({
        where: { slug: subData.slug },
        update: {},
        create: {
          slug: subData.slug,
          name: subData.name,
          categoryId: category.id,
        },
      });

      console.log(`    🔹 Подкатегория: ${subcategory.name}`);

      // Шаг 4: Создаем данные курса, если они есть
      const courseData = CONTENT_DATA[subData.slug];
      if (courseData) {
        await prisma.courseData.upsert({
          where: { subcategoryId: subcategory.id },
          update: {},
          create: {
            ...courseData,
            subcategoryId: subcategory.id,
          },
        });
        console.log(`       🎓 Курс: ${courseData.name}`);
      }
    }
  }

  console.log('\n✅ Все данные успешно созданы!');
  console.log('📊 Статистика:');
  console.log(`   - Типов контента: ${await prisma.contentType.count()}`);
  console.log(`   - Категорий: ${await prisma.category.count()}`);
  console.log(`   - Подкатегорий: ${await prisma.subcategory.count()}`);
  console.log(`   - Курсов: ${await prisma.courseData.count()}`);
}

// ============================================================
// ЗАПУСК
// ============================================================

main()
  .catch(async (e) => {
    console.error('❌ Ошибка:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
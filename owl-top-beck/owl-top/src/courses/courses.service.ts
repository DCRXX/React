import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

// Экспортируем интерфейс, чтобы NestJS мог его использовать
export interface CourseDetails {
  id: number;
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
  logoImageId: number | null;
  ratingImageId: number | null;
  subcategory: {
    slug: string;
    name: string;
    category: {
      name: string;
      contentType: {
        type: string;
      };
    };
  };
}

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) { }

  /**
   * Получить все курсы (для админки или отладки)
   */
  async getAllCourses() {
    return this.prisma.courseData.findMany({
      include: {
        subcategory: {
          include: {
            category: {
              include: {
                contentType: true,
              },
            },
          },
        },
      },
    });
  }

  /**
   * Получить курс по slug подкатегории (основной метод для фронтенда)
   */
  async getCourseBySlug(slug: string): Promise<CourseDetails> {
    const course = await this.prisma.courseData.findFirst({
      where: {
        subcategory: {
          slug: slug,
        },
      },
      include: {
        subcategory: {
          select: {
            slug: true,
            name: true,
            category: {
              select: {
                name: true,
                contentType: {
                  select: {
                    type: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!course) {
      throw new NotFoundException(`Курс со slug "${slug}" не найден`);
    }

    return course;
  }

  /**
   * Получить меню курсов для аккордеона
   */
  async getCoursesMenu() {
    const contentType = await this.prisma.contentType.findFirst({
      where: { type: 'courses' },
      include: {
        categories: {
          orderBy: { name: 'asc' },
          include: {
            subcategories: {
              orderBy: { name: 'asc' },
              select: {
                slug: true,
                name: true,
              },
            },
          },
        },
      },
    });

    if (!contentType) {
      throw new NotFoundException('Тип контента "courses" не найден');
    }

    return contentType.categories.map((cat) => ({
      category: cat.name,
      subcategories: cat.subcategories,
    }));
  }
  async getFullMenuStructure() {
    return this.prisma.contentType.findMany({
      orderBy: { label: 'asc' },
      select: {
        type: true,   // "courses"
        label: true,  // "Курсы"
        categories: {
          orderBy: { name: 'asc' },
          select: {
            name: true,
            subcategories: {
              orderBy: { name: 'asc' },
              select: {
                slug: true,
                name: true,
              },
            },
          },
        },
      },
    });
  }
}
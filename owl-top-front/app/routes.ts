import { apiRequest } from "@/client";

// Интерфейс для подкатегории
export interface Subcategory{
  slug: string;
  name: string;
  category: Category[];
    
}

// Интерфейс для категории
export interface Category{
  id: number;
  name: string;
  contentTypeId: number;
  subcategories: Subcategory[]
}

// Интерфейс для list-of-services
export interface ContentType{
  id: number;
  type: string;
  label: string;
  categories: Category[];
}

export interface RouteData {
  id: string;
  path: string;
  label: string;
  category: string;
  subcategory: string;
}


// Интерфейс для курсов
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

// API-клиент для курсов
export const menuAPI ={
    // Получить структуру меню для аккордеона
    getFullMenu: async (): Promise<ContentType[]> => {
      return apiRequest<ContentType[]>('/menu');
    },
    getFullMen: async (): Promise<Category[]> => {
      return apiRequest<Category[]>('');
    },
    getRoutes: async(): Promise<RouteData[]> => {
      return apiRequest<RouteData[]>('/routes')
    },
    // Получить данные конкретного курса
    getCourse: async(slug: string): Promise<CourseDetails> => {
        return apiRequest<CourseDetails>(`/courses/${slug}`);
    },
}
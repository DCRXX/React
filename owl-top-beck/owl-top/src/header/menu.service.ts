import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';



@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

    async getFullMenu() {
    return this.prisma.contentType.findMany({
      orderBy: { label: 'asc' },
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
  }
  async getAllRoutes(){
      const subcategories = await this.prisma.subcategory.findMany({
        select:{
          slug: true,
          name: true,
          category:{
            select:{
              name: true,
              contentType:{
                select:{
                  type: true,
                }
              }
            }
          }
        }
      })
      return subcategories.map((sub) => ({
        id: sub.slug,
        path: `/${sub.slug}`,
        label: sub.name,
        category: sub.category.contentType.type,
        subcategories: sub.category.name
      }))
    }
}
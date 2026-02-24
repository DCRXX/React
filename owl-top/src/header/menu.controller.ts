import { Controller, Get } from '@nestjs/common';
import { MenuService } from './menu.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';


@ApiTags('Меню')
@Controller()
export class MenuController {
  constructor(private MenuService: MenuService) {}

  @Get('menu')
  @ApiOperation({summary: 'Получить всё меню'})
  @ApiResponse({
    status: 200,
    description: 'Все типы контента с категориями',
    schema:{
        example:[
            {
                type: 'courses',
                label: 'Курсы',
                cateories:[
                    { name: 'Дизайн', subcategories: [{ slug: 'photoshop', name: 'Photoshop' }] }
                ]
            }
        ]
    }
  })

  async getMenu(){
    return this.MenuService.getFullMenu();
  }

  @Get('routes')
  @ApiOperation({summary: 'Получить все маршруты меню'})
  @ApiResponse({
    status: 200,
    description: 'Список всех маршрутов'
  })
  async getRoutes(){
    return this.MenuService.getAllRoutes();
  }
}
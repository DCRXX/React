import {
  Controller,
  Get,
  Param,
  NotFoundException,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Курсы')
@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  @ApiOperation({ summary: 'Получить все курсы' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Список всех курсов',
  })
  async getAll() {
    return this.coursesService.getAllCourses();
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Получить курс по slug' })
  @ApiParam({
    name: 'slug',
    description: 'Slug подкатегории (например: photoshop, javascript)',
    example: 'javascript',
  })

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Данные курса найдены',
  })

  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Курс не найден',
  })
  async getCourse(@Param('slug') slug: string) {
    return this.coursesService.getCourseBySlug(slug);
  }
}
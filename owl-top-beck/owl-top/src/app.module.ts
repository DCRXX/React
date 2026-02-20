import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { MenuModule } from './header/menu.module';

@Module({
  imports: [CoursesModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

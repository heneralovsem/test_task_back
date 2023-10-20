import { Module } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { BuildingsController } from './buildings.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Building } from './buildings.model';
import { FilesModule } from 'src/files/files.module';

@Module({
  providers: [BuildingsService],
  controllers: [BuildingsController],
  imports: [
    SequelizeModule.forFeature([Building]),
    FilesModule
  ]
})
export class BuildingsModule {}

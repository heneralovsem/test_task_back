import { Injectable } from '@nestjs/common';
import { createBuildingDto } from './dto/create-building.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Building } from './buildings.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class BuildingsService {

    constructor(@InjectModel(Building) private buildingRepository: typeof Building,
        private fileService: FilesService) {}

    async create(dto: createBuildingDto, img:any) {
        const fileName = await this.fileService.createFile(img)
        const building = await this.buildingRepository.create({...dto, img: fileName })
        return building
    }
    async getAllBuildings() {
        const buildings = await this.buildingRepository.findAll();
        return buildings;
    }
}

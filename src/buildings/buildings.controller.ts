import { Controller, Post, Get, Body, UploadedFile, UseInterceptors} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { createBuildingDto } from './dto/create-building.dto';
import { BuildingsService } from './buildings.service';
import { Building } from './buildings.model';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('buildings')
export class BuildingsController {

    constructor(private buildingService: BuildingsService) {}

    @ApiOperation({summary: 'Create building'})
    @ApiResponse({status: 200, type: Building})
    @Post()
    @UseInterceptors(FileInterceptor('img'))
    createBuilding(@Body() dto: createBuildingDto, @UploadedFile() img) {
       return this.buildingService.create(dto, img)
    }

    @ApiOperation({summary: 'Get all buildings'})
    @ApiResponse({status: 200, type: Building})
    @Get()
    getAll() {
        return this.buildingService.getAllBuildings()
    }

}

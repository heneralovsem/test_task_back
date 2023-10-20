import { Controller, Body, Post, Get, UseGuards, UsePipes } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './users.model';


@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {

    }
    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto:CreateUserDto) {
        return this.usersService.createUser(userDto)
    }
    
}

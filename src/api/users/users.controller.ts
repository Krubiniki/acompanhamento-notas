import { Controller, Get, Param, Post, Delete, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Get('/:id')
    getUserById(@Param('id') id:string){
        return this.usersService.getUserById(id)
    }

    @Post('/new')
    createUsers(@Body() payload:any){
        return this.usersService.createUser(payload)
    }

    @Post('/:id/update')
    updateUsers(@Body() payload:any){
        return this.usersService.updateUser(payload)
    }

    @Delete('/:id/delete')
    deleteUsers(@Param('id') id:string){
        return this.usersService.deleteUser(id)
    }
}

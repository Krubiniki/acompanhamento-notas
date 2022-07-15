import { Controller, Get, Param, Post, Delete, Body } from '@nestjs/common';
import { NotasService } from './notas.service';

@Controller('notas')
export class NotasController {
    constructor(private readonly notasService:NotasService){}

    @Post()
    getNotas(@Body() payload:any){
        return this.notasService.getNotas(payload)
    }

    @Post('/:id')
    getNotaByUserId(@Body() payload:any){
        return this.notasService.getNotaByUserId(payload)
    }
    
    @Post('/new')
    createNota(@Body() payload:any){
        console.log(payload)
        return this.notasService.createNota(payload)
    }

    @Post('/:id/update')
    updateNota(@Body() payload:any){
        return this.notasService.updateNota(payload)
    }

    @Delete('/:id/delete')
    deleteNota(@Param('id') id:string){
        return this.notasService.deleteNota(id)
    }
}

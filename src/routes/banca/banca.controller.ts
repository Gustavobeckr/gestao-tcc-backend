import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BancaService } from './banca.service';
import { CreateBancaDto } from './dto/create-banca.dto';
import { UpdateBancaDto } from './dto/update-banca.dto';

@Controller('banca')
export class BancaController {
  constructor(private readonly bancaService: BancaService) {}

  @Post()
  create(@Body() createBancaDto: CreateBancaDto) {
    return this.bancaService.create(createBancaDto);
  }

  @Get()
  findAll() {
    return this.bancaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bancaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBancaDto: UpdateBancaDto) {
    return this.bancaService.update(+id, updateBancaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bancaService.remove(+id);
  }
}

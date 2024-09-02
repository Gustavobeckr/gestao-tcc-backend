import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post()
  create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunoService.create(createAlunoDto);
  }

  @Get()
  findAll() {
    return this.alunoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') matricula: string) {
    return this.alunoService.findOne(+matricula);
  }

  @Patch(':id')
  update(
    @Param('id') matricula: string,
    @Body() updateAlunoDto: UpdateAlunoDto,
  ) {
    return this.alunoService.update(+matricula, updateAlunoDto);
  }

  @Delete(':id')
  remove(@Param('id') matricula: string) {
    return this.alunoService.remove(+matricula);
  }
}

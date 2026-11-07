import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  @Get()
  findAll(): string {
    return 'Tampil semua article';
  }

  @Get('/:id')
  findOne(@Param() params: any): string {
    return `Tampil article dengan id ${params.id}`;
  }

  @Post()
  create(): string {
    return 'Tambah article';
  }

  @Put('/:id')
  update(@Param() params: any): string {
    return `Update article dengan id ${params.id}`;
  }

  @Delete('/:id')
  delete(@Param() params: any): string {
    return `Hapus article dengan id ${params.id}`;
  }
}

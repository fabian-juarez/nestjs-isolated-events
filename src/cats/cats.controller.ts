import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { async, Observable } from 'rxjs';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './interfaces/cat.interface';


@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `this action returns #${id} cat`;
  }

  @Post()
  createCat(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Put()
  updateCat(@Body() updateCatDto: UpdateCatDto): string {
    return 'this action update a cat';
  }

    @Get()
    async findAllPromise(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}

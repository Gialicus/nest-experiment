import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MonsterService } from './monster.service';

@Controller('monster')
export class MonsterController {
    constructor(private monsterService: MonsterService){}

    @Post()
    async createMonster(
        @Body('name') name: string,
        @Body('hp') hp: number){
            const insertedId = await this.monsterService.createOne(
                name,
                hp
            )
            return {id: insertedId}
        }
        
    @Get()
    async getAllMonsters() {
        const result = await this.monsterService.getAll();
        return result
    }
    
    @Get(':id')
    getOneMonster(@Param('id') monsterId: string) {
      return this.monsterService.getOne(monsterId);
    }
  
    @Patch(':id')
    updateMonster(
      @Param('id') monsterId: string,
      @Body('name') name: string,
      @Body('hp') hp: number
    ) {
      this.monsterService.updateOne(monsterId, name, hp);
      return null;
    }
  
    @Delete(':id')
    deleteMonster(@Param('id') monsterId: string) {
      this.monsterService.deleteOne(monsterId);
      return null;
    }
}

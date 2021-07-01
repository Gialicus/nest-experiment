import { Body, Controller, Get, Post } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Crud({
    model: {
        type: Hero
    }
})
@Controller('hero')
export class HeroController {
   constructor(public service: HeroService) {}

   @Post('attack')
   handleAttack(
       @Body('target') target: string,
       @Body('hp') hp: number, 
       @Body('damage') damage: number) {
       return this.service.sendAttack(target,hp,damage)
   }
}

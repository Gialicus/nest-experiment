import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Observable } from 'rxjs';
import { PublisherService } from 'src/publisher/publisher.service';
import { Hero } from './hero';

@Injectable()
export class HeroService extends TypeOrmCrudService<Hero>{
    constructor(@InjectRepository(Hero) repository,private readonly pubService: PublisherService) {
        super(repository)
    }
    sendAttack(target: string, hp: number, damage: number) {
        return this.pubService.sendAttack(target,hp,damage)
    }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublisherService } from 'src/publisher/publisher.service';
import { Hero } from './hero';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hero])],
  controllers: [HeroController],
  providers: [HeroService,PublisherService]
})
export class HeroModule {}

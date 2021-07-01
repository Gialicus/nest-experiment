import { Module } from '@nestjs/common';
import { MonsterService } from './monster.service';
import { MonsterController } from './monster.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { monsterSchema } from './monster';

@Module({
  imports: [MongooseModule.forFeature([{name:'Monster', schema: monsterSchema}])],
  providers: [MonsterService],
  controllers: [MonsterController]
})
export class MonsterModule {}

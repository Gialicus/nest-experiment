import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroModule } from './hero/hero.module';
import { MonsterModule } from './monster/monster.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL || 'mongodb://localhost:27017/gioco'),
    HeroModule, 
    MonsterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

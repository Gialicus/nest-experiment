import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Monster } from './monster';

@Injectable()
export class MonsterService {
    constructor(@InjectModel('Monster') private readonly monsterModel: Model<Monster>) { }
    async createOne(name: string, hp: number) {
        const newMonster = new this.monsterModel({
            name,
            hp
        });
        const result = await newMonster.save()
        return result.id as string;
    }
    async getAll() {
        const monsters = await this.monsterModel.find().exec();
        return monsters.map((monster) => ({
            id: monster.id,
            name: monster.name,
            hp: monster.hp
        }));
    }


    async getOne(monsterId: string) {
        const monster = await this.findbyId(monsterId);
        return {
            id: monster.id,
            name: monster.name,
            hp: monster.hp
        };
    }

    async updateOne(
        monsterId: string,
        name: string,
        hp: number
    ) {
        const modMonster = await this.findbyId(monsterId);

        //Only modify Values passed
        if (name) modMonster.name = name;
        if (hp) modMonster.hp = hp;

        modMonster.save();
    }

    async deleteOne(monsterId: string) {
        const result = await this.monsterModel.deleteOne({ _id: monsterId }).exec();
        if (result.n === 0) {
            throw new NotFoundException('Could not find user.');
        }
    }

    private async findbyId(id: string): Promise<Monster> {
        let monster: any;
        try {
            monster = await this.monsterModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find user.');
        }
        if (!monster) {
            throw new NotFoundException('Could not find user.');
        }
        return monster;
    }
}

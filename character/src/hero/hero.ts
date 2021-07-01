import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hero {

    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @Column()
    name: string

    @ApiProperty()
    @Column()
    hp: number
    
    @ApiProperty()
    @Column()
    mana: number
}

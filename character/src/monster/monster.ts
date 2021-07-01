import * as mongoose from 'mongoose';
export const monsterSchema = new mongoose.Schema({
    name: { type: 'String', required: true},
    hp: { type: 'Number', required: true}
}) 
export interface Monster extends mongoose.Document {
    id: string;
    name: string;
    hp: number
}

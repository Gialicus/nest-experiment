import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class PublisherService {
    client: ClientProxy
    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: process.env.CLIENT_HOST || '127.0.0.1',
                port: parseInt(process.env.CLIENT_PORT) || 8877
            }
        })
    }
    sendAttack(targetName: string, targetCurrentHp: number, damage: number) {
        return this.client.send('attack', {
            target: targetName,
            hp: targetCurrentHp,
            damage
        })
    }
}

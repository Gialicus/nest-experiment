import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppService } from './app.service';
import AttackDto from './models/attack-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('attack')
  handleAttack(data: AttackDto): Observable<Partial<AttackDto>> {
    console.log('DATA CONSUMED: ', data)
    return this.appService.processAttack(data.target,data.hp,data.damage).pipe(tap(console.log));
  }

}

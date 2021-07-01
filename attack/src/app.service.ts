import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import AttackDto from './models/attack-dto';

@Injectable()
export class AppService {

  processAttack(target: string, hp: number, damage: number): Observable<Partial<AttackDto>> {
    return of({
      target,
      hp: hp - damage
    })
  }
}

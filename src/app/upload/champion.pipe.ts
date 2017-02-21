import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'champion'
})

export class ChampionPipe implements PipeTransform {
  transform(champions: Object[], champion): Object[] {
    return [];
  }
}
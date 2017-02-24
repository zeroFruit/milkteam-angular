import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'champion'
})

export class ChampionPipe implements PipeTransform {
  transform(champions: Object[], text: any): Object[] {
    if (!text) return [];

    let result = champions.filter((champion) => {
      return (champion['name'].indexOf(text) !== -1 && champion['name'] != text);
    })
    return result;
  }
}
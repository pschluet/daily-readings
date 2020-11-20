import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentencecase'
})
export class SentenceCasePipe implements PipeTransform {
  transform(value: string): string {
    return value[0] + value.substr(1).toLowerCase();
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate',
})
export class MyDatePipe implements PipeTransform {
  transform(value:Date): string {
      return  `${value.toLocaleDateString()} ${value.toTimeString().substring(0,5)}`
  }
}

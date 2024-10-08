import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate',
})
export class MyDatePipe implements PipeTransform {
  transform(value:Date): string {
    value = new Date(value)
    return `${value.toLocaleDateString()} ${value.toTimeString().substring(0,5)}`
    return value.toUTCString()
  }
}

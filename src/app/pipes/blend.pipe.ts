import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blend'
})
export class BlendPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

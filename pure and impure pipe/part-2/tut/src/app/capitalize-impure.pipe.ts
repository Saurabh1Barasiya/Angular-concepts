import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeImpure',
  pure: false,
})
export class CapitalizeImpurePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  // transform(value: string): string {
  //   if (!value) return '';
  //   return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  // }


  transform(value: string): string {
    console.log("Impure pipe works...");
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

}

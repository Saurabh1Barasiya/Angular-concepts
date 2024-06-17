import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizePure',
  pure: true,
})
export class CapitalizePurePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  // transform(value: string): string {

  //   console.log("Pure pipe...");

  //   if (!value) return '';
  //   return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  // }


  transform(value: string): string {
    console.log("Pure pipe...");
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPure',
  pure:true
})
export class FilterPurePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    console.log("Pure pipe works...");
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.toLowerCase().includes(searchText);
    });   
  }

}

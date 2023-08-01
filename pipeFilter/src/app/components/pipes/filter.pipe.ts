import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteringData:string): any {
    if (value.length === 0 || filteringData === '') {
      return value
    }

    const users:any[] = []
    for(const user of value){
      if (user.company['designation'] === filteringData) {
        users.push(user)
      }else if (user['name']===filteringData) {
        users.push(user)

      }
    }
    return users
  }

}

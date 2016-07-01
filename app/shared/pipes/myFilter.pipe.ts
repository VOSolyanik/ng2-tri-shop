import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myFilter'
})

export class MyFilterPipe implements PipeTransform {
    transform(value: any, filterObj: any): any {
        let propName
        for(var key in filterObj){
            if(filterObj.hasOwnProperty(key))
                propName = key;
                break;
        }

        if (JSON.stringify(filterObj) === JSON.stringify({}) || 
            !propName || 
            !filterObj[propName] ||
            !(value instanceof Array)
        ) {
            return value;

        }

        return value.filter(item => item[propName].toLowerCase().indexOf(filterObj[propName].toLowerCase()) > -1 );
        
    }
} 
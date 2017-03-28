import { Pipe, PipeTransform, Injectable } from '@angular/core';


@Pipe({
    name: 'patientFilterPipe',
    pure: false
})
@Injectable()
export class patientFilterPipe implements PipeTransform {
    transform(items: any[], filterMethod: string, field: string, value: any): any[] {
        // filter items array, items which match and return true will be kept, false will be filtered out
        if (!items) return null;
        switch (filterMethod) {
            case 'substring': {
                if (!value) return items; //returns items for null,undefined,"" in value.
                return items.filter(item => item[field] ? item[field].indexOf(value) !== -1 : true);
            }
        }
    }
}
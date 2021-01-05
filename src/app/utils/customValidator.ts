import { AbstractControl } from '@angular/forms';
export class CustomValidator {

    static isPriceValid(control: AbstractControl){
        console.log(control.value);
        const value = control.value;
        if (value > 10000){
            return {price_invalid: true};
        }
        return null;
    }

}

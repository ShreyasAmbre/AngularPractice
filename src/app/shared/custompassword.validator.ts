import { AbstractControl } from '@angular/forms';


export function ValidatePassword(control: AbstractControl){

    let regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    // console.log("CUSTOM VALIDATION password=>", regexp.exec(control.value) === null)
    return regexp.exec(control.value) === null ? { inValidPassword: true } : null
}



export function ValidateContactNo(control: AbstractControl){
    // console.log("CUSTOM VAL contactno =>", control)
    if(!control.value.startsWith('+91')){
        return { inValidContact : true }
    }else{
        return null
    }
}
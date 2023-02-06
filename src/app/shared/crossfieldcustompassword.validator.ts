import { AbstractControl } from "@angular/forms";

export function PasswordMatchValidator(control: AbstractControl){
    let password = control.get('fbpassword')?.value
    let confirmpassword = control.get('fbconfirmpassword')?.value
    // console.log("CUSTOM VALIDATIOR Cross field =>", password && confirmpassword && password !== confirmpassword)
    return password && confirmpassword && password !== confirmpassword ? { misMatch: true } : null
}
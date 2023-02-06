import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'commasepratenum'
})


export class CommaSeprateNum implements PipeTransform{
    transform(value: any, ...args: any[]) {
        if(args[0] === 'string'){
            let num = Number(value)
            let val = (num).toLocaleString('en-IN', { minimumFractionDigits: 2 })
            return val
        }else{
            return (value).toLocaleString('en-IN', { minimumFractionDigits: 2 })
        }
    }
}
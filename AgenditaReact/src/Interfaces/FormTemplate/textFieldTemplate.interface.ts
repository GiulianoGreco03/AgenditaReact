
import type { FormType } from "../../Enums/FormTypesEnum";

export interface textFieldTemplate{
    id:number,
    type:FormType.Textfield,
    title:string,
    description:string,
    order:number
}
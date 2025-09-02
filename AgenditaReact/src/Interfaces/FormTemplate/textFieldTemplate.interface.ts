import type { FormType } from "../../Enums/FormTypesEnum";

export interface textFieldTemplate{
    type:FormType.Textfield,
    title:string,
    description:string,
    order:number
}
import type { FormType } from "../../Enums/FormTypesEnum";
import type { optionTemplate } from "./optionTemplate.interface";

export interface selectTemplate{
    type:FormType.Select,
    title:string,
    order: number,
    options:optionTemplate[]
}
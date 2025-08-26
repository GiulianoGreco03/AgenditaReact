import type { checkboxTemplate } from "./checkboxTemplate.interface";
import type { selectTemplate } from "./selectTemplate.interface";
import type { textFieldTemplate } from "./textFieldTemplate.interface";

export interface formTemplate{
    title: string,
    textFields: textFieldTemplate[],
    checkboxes: checkboxTemplate[],
    selects: selectTemplate[]
}
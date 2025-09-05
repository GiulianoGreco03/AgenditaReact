import type { checkboxTemplate } from "../Interfaces/FormTemplate/checkboxTemplate.interface";
import type { selectTemplate } from "../Interfaces/FormTemplate/selectTemplate.interface";
import type { textFieldTemplate } from "../Interfaces/FormTemplate/textFieldTemplate.interface";

export type FormElement = selectTemplate | checkboxTemplate | textFieldTemplate;

export type FormElementListProps = {
  formElements: FormElement[];
  deleteElement: (el: FormElement) => void;
  addOptionToSelect: (order: number, value: string) => void;
  optionInputs: Record<number, string>;
  setOptionInputs: React.Dispatch<React.SetStateAction<Record<number, string>>>;
};

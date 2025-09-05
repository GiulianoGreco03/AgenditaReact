import "./FormElementsList.css"
import { FormType } from "../../../Enums/FormTypesEnum";
import TextFieldItem from "../TextFieldItem/TextField";
import Button from "@mui/material/Button";
import SelectItem from "../SelectItem/SelectItem";
import TextField from "@mui/material/TextField";
import type { FormElementListProps } from "../../../Types/FormTypes";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import CheckboxItem from "../CheckboxItem/CheckboxItem";
import Box from "@mui/material/Box";

function FormElementList({
  formElements,
  deleteElement,
  addOptionToSelect,
  optionInputs,
  setOptionInputs,
}: FormElementListProps) {
  return (
    <div className="formList">
      <SortableContext
        items={formElements}
        strategy={verticalListSortingStrategy}
      >
        {formElements.map((e) => {
          switch (e.type) {
            case FormType.Textfield:
              return (
                <div className="formListElement" key={e.id}>
                  <TextFieldItem
                    id={e.id}
                    type={FormType.Textfield}
                    title={e.title}
                    description={e.description}
                    order={e.order}
                  />
                  <Button onClick={() => deleteElement(e)}>eliminar</Button>
                </div>
              );
            case FormType.Checkbox:
              return (
                <div key={e.id} className="formListElement">
                  <CheckboxItem
                    id={e.id}
                    title={e.title}
                    order={e.order}
                    type={e.type}
                  />
                  <Button onClick={() => deleteElement(e)}>eliminar</Button>
                </div>
              );
            case FormType.Select:
              return (
                <div key={e.id} className="formListElement">
                  <SelectItem
                    id={e.id}
                    type={e.type}
                    title={e.title}
                    order={e.order}
                    options={e.options}
                  />
                  <Box>

                  <TextField
                    value={optionInputs[e.order] || ""}
                    onChange={(or) =>
                      setOptionInputs({
                        ...optionInputs,
                        [e.order]: or.target.value,
                      })
                    }
                  />
                  <Button
                    onClick={() =>
                      addOptionToSelect(e.order, optionInputs[e.id])
                    }
                  >
                    Agregar opción
                  </Button>
                  <Button onClick={() => deleteElement(e)}>eliminar</Button>
                  </Box>
                </div>
              );
          }
        })}
      </SortableContext>
    </div>
  );
}

export default FormElementList;

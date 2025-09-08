import Box from "@mui/material/Box";
import "./FormTemplateCreator.css";
import Typography from "@mui/material/Typography";
import type { textFieldTemplate } from "../../../Interfaces/FormTemplate/textFieldTemplate.interface";
import type { checkboxTemplate } from "../../../Interfaces/FormTemplate/checkboxTemplate.interface";
import type { selectTemplate } from "../../../Interfaces/FormTemplate/selectTemplate.interface";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { FormType } from "../../../Enums/FormTypesEnum";
import FormElementList from "../FormElementsList/FormElementsList";
import type { FormElement } from "../../../Types/FormTypes";
import { closestCorners, DndContext, type DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

function FormTemplateCreator() {
  const [formElements, setFormElements] = useState<FormElement[]>([]);

  const [textFieldInput, setTextFieldInput] = useState("");
  const [checkboxInput, setCheckboxInput] = useState("");
  const [selectInput, setSelectInput] = useState("");
  const [optionInputs, setOptionInputs] = useState<Record<number, string>>({});

  const order = useRef(0);

  const createTextField = (name: string) => {
    if (name.trim() === "") return;
    const newField: textFieldTemplate = {
      id: order.current,
      type: FormType.Textfield,
      title: name,
      description: "",
      order: order.current,
    };
    order.current += 1;
    setFormElements((prev) => [...prev, newField]);
    setTextFieldInput("");
  };

  const createCheckbox = (name: string) => {
    if (name.trim() === "") return;
    const newCheck: checkboxTemplate = {
      id: order.current,
      type: FormType.Checkbox,
      title: name,
      order: order.current,
    };
    order.current += 1;
    console.log(formElements);
    
    setFormElements((prev) => [...prev, newCheck]);
    setCheckboxInput("");
  };

  const createSelect = (name: string) => {
    if (name.trim() === "") return;
    const newSelect: selectTemplate = {
      id: order.current,
      type: FormType.Select,
      title: name,
      order: order.current,
      options: [],
    };
    order.current += 1;
    setFormElements((prev) => [...prev, newSelect]);
    setSelectInput("");
  };

  const deleteElement = (e: FormElement) => {
    const newElements = formElements.filter((t) => t.order != e.order);
    setFormElements(newElements);
  };

  const addOptionToSelect = (order: number, value: string) => {
    if (!value.trim()) return;

    setFormElements((prev) =>
      prev.map((el) =>
        el.order === order && el.type === "select"
          ? {
              ...el,
              options: [...el.options, { option: value }],
            }
          : el
      )
    );
    setOptionInputs((prev) => ({ ...prev, [order]: "" }));
  };

  const getElementPosition = (id: number | string) => formElements.findIndex((aux)=>aux.id === id)
  
  const handleDragEnd = (event:DragEndEvent) =>{
    const {active, over} = event
    if(active.id === over?.id) return

    if(over){  setFormElements(elements =>{
        const originalPos = getElementPosition(active.id)
        const newPos = getElementPosition(over.id)
        console.log(formElements);
        
        return arrayMove(elements, originalPos, newPos)
      })}
    
  }

  return (
    <Container>
      <form action="">
        <Box sx={{ display: "flex", gap: 2 }}>
          <div className="form-template-button">
            <TextField type="text" variant="outlined" />
            <Typography>Nombre del formulario</Typography>
          </div>
          <div className="form-template-button">
            <TextField
              value={textFieldInput}
              onChange={(e) => setTextFieldInput(e.target.value)}
            />
            <Button onClick={() => createTextField(textFieldInput)}>
              Agregar campo de texto
            </Button>
          </div>
          <div className="form-template-button">
            <TextField
              value={checkboxInput}
              onChange={(e) => setCheckboxInput(e.target.value)}
            />
            <Button onClick={() => createCheckbox(checkboxInput)}>
              Agregar checkbox
            </Button>
          </div>
          <div className="form-template-button">
            <TextField
              value={selectInput}
              onChange={(e) => setSelectInput(e.target.value)}
            />
            <Button onClick={() => createSelect(selectInput)}>
              Agregar menú desplegable
            </Button>
          </div>
        </Box>

        <Box>
          <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
            <FormElementList
              formElements={formElements}
              deleteElement={deleteElement}
              addOptionToSelect={addOptionToSelect}
              optionInputs={optionInputs}
              setOptionInputs={setOptionInputs}
            />
          </DndContext>
        </Box>
      </form>
    </Container>
  );
}

export default FormTemplateCreator;

import Box from "@mui/material/Box";
import "./FormTemplateCreator.css";
import Typography from "@mui/material/Typography";
import type { textFieldTemplate } from "../../../Interfaces/FormTemplate/textFieldTemplate.interface";
import type { checkboxTemplate } from "../../../Interfaces/FormTemplate/checkboxTemplate.interface";
import type { selectTemplate } from "../../../Interfaces/FormTemplate/selectTemplate.interface";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useRef, useState } from "react";
import TextFieldItem from "../TextFieldItem/TextField";
import Input from "@mui/material/Input";
import SelectItem from "../SelectItem/SelectItem";

function FormTemplateCreator() {
  //const { register, handleSumbit } = useForm();

  const [textFields, setTextFields] = useState<textFieldTemplate[]>([]);
  const [checkboxes, setCheckboxes] = useState<checkboxTemplate[]>([]);
  const [selects, setSelects] = useState<selectTemplate[]>([]);

  const [textFieldInput, setTextFieldInput] = useState("");
  const [checkboxInput, setCheckboxInput] = useState("");
  const [selectInput, setSelectInput] = useState("");
  const [optionInputs, setOptionInputs] = useState<Record<number, string>>({});

  const textFieldOrder = useRef(textFields.length);
  const checkboxOrder = useRef(checkboxes.length);
  const selectOrder = useRef(selects.length);

  const createTextField = (name: string) => {
    if (name != null && name != "") {
      const newField: textFieldTemplate = {
        title: name,
        description: "",
        order: textFieldOrder.current,
      };
      textFieldOrder.current += 1
      setTextFields((prev) => [...prev, newField]);
      setTextFieldInput("");
    }
  };

  const createCheckbox = (name: string) => {
    if (name != null && name != "") {
      const newCheck: checkboxTemplate = { title: name, order: checkboxOrder.current };
     checkboxOrder.current += 1;
      setCheckboxes((prev) => [...prev, newCheck]);
      setCheckboxInput("");
    }
  };

  const createSelect = (name: string) => {
    if (name != null && name != "") {
      const newSelect: selectTemplate = {
        title: name,
        order: selectOrder.current,
        options: [],
      };
      selectOrder.current += 1;
      setSelects((prev) => [...prev, newSelect]);
      setSelectInput("");
    }
  };

  const deleteTextField = (textField: textFieldTemplate) => {
    const newTextFields = textFields.filter((t) => t.order != textField.order);
    setTextFields(newTextFields);
  };

  const deleteCheckbox = (checkbox: checkboxTemplate) => {
    const newCheckboxes = checkboxes.filter((t) => t.order != checkbox.order);
    setCheckboxes(newCheckboxes);
  };

  const deleteSelect = (select: selectTemplate) => {
    const newSelects = selects.filter((t) => t.order != select.order);
    setSelects(newSelects);
  };

  const addOptionToSelect = (order: number) => {
    setSelects((prev) =>
      prev.map((select) =>
        select.order === order
          ? { ...select, options: [...select.options, { option: optionInputs[order] }] }
          : select
      )
    );
    setOptionInputs((prev) => ({ ...prev, [order]: "" }));
  };


  

  return (
    <Box>
      <form action="">
        <Box sx={{ display: "flex", gap:2 }}>
          <Box sx={{backgroundColor:"red"}}>
            <Typography>Nombre del formulario</Typography>
            <input type="text" name="" id="" />
          </Box>
          <Box sx={{display:"flex", flexDirection:"column", backgroundColor:"red"}}>
             <input
            value={textFieldInput}
            onChange={(e) => setTextFieldInput(e.target.value)}
            />
            <Button onClick={() => createTextField(textFieldInput)}>
              Agregar campo de texto
            </Button>
          </Box>
          <Box sx={{display:"flex", flexDirection:"column", backgroundColor:"red"}}>
          <input
            value={checkboxInput}
            onChange={(e) => setCheckboxInput(e.target.value)}
          />
          <Button onClick={() => createCheckbox(checkboxInput)}>
            Agregar checkbox
          </Button>
          </Box>
          <Box sx={{display:"flex", flexDirection:"column", backgroundColor:"red"}}>
          <input
            value={selectInput}
            onChange={(e) => setSelectInput(e.target.value)}
          />
          <Button onClick={() => createSelect(selectInput)}>
            Agregar menú desplegable
          </Button>
          </Box>
        </Box>

        <Box>
          {textFields.map((text) => {
            return (
              <Box
                key={text.order}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <TextFieldItem
                  title={text.title}
                  description=""
                  order={text.order}
                />
                <Button onClick={() => deleteTextField(text)}>eliminar</Button>
              </Box>
            );
          })}
        </Box>
        <Box>
          {checkboxes.map((text) => {
            return (
              <Box key={text.order}>
                <FormControlLabel control={<Checkbox/>} key={checkboxOrder.current} label={text.title}/>
                <Button onClick={() => deleteCheckbox(text)}>eliminar</Button>
              </Box>
            );
          })}
        </Box>
        <Box>
          {selects.map((text) => {
            return (
              <Box key={text.order}>
                <SelectItem
                  title={text.title}
                  order={text.order}
                  options={text.options}
                />
                <Input
                  value={optionInputs[text.order] || ""}
                  onChange={(e) =>
                    setOptionInputs({
                      ...optionInputs,
                      [text.order]: e.target.value,
                    })
                  }
                />
                <Button onClick={() => addOptionToSelect(text.order)}>
                  {" "}
                  Agregar opción
                </Button>
                <Button onClick={() => deleteSelect(text)}>eliminar</Button>
              </Box>
            );
          })}
        </Box>
      </form>
    </Box>
  );
}

export default FormTemplateCreator;

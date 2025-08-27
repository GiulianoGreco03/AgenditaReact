import Box from "@mui/material/Box";
import "./FormTemplateCreator.css";
import Typography from "@mui/material/Typography";
import type { textFieldTemplate } from "../../../Interfaces/FormTemplate/textFieldTemplate.interface";
import type { checkboxTemplate } from "../../../Interfaces/FormTemplate/checkboxTemplate.interface";
import type { selectTemplate } from "../../../Interfaces/FormTemplate/selectTemplate.interface";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import TextFieldItem from "../TextFieldItem/TextField";
import Input from "@mui/material/Input";

function FormTemplateCreator() {
  //const { register, handleSumbit } = useForm();

  const [textFields, setTextFields] = useState<textFieldTemplate[]>([]);
  const [checkboxes, setCheckboxes] = useState<checkboxTemplate[]>([]);
  const [selects, setSelects] = useState<selectTemplate[]>([]);

  const [textFieldInput, setTextFieldInput] = useState("");

  const [textFieldOrder, setTextFieldOrder] = useState(0);

  const createTextField = (name: string) => {
    if(name!= null && name!=""){
        setTextFieldOrder(textFieldOrder + 1);
        const newField: textFieldTemplate = { title: name, order: textFieldOrder };
        setTextFields((prev) => [...prev, newField]);
        setTextFieldInput("")
    }
  };

  const deleteTextField = (textField: textFieldTemplate) => {
    const newTextFields = textFields.filter((t) => t.order != textField.order);
    setTextFields(newTextFields);
  };

  return (
    <Box>
      <form action="">
        <Box sx={{ display: "flex" }}>
          <Typography>Nombre del formulario</Typography>
          <Input type="text" name="" id="" />
        </Box>

        <Box>
          <Input
            value={textFieldInput}
            onChange={(e) => setTextFieldInput(e.target.value)}
          />
          <Button onClick={() => createTextField(textFieldInput)}>
            Agregar campo de texto
          </Button>
          {textFields.map((text) => {
            return (
              <Box key={text.order} sx={{display:"flex", alignItems:"center"}}>
                <TextFieldItem title={text.title} description="" order={text.order}/>
                <Button onClick={() => deleteTextField(text)}>eliminar</Button>
              </Box>
            );
          })}
        </Box>
        {/* <Box>
          <input
            value={textFieldInput}
            onChange={(e) => setTextFieldInput(e.target.value)}
          />
          <Button onClick={() => createTextField(textFieldInput)}>
            Agregar checkbox
          </Button>
          {textFields.map((text) => {
            return (
              <Box key={text.order}>
                <FormControlLabel control={<Checkbox />} label={text.title} />
                <Button onClick={() => deleteTextField(text)}>eliminar</Button>
              </Box>
            );
          })}
        </Box> */}
      </form>
    </Box>
  );
}

export default FormTemplateCreator;

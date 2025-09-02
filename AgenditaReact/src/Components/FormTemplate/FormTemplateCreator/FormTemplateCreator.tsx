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
import SelectItem from "../SelectItem/SelectItem";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { FormType } from "../../../Enums/FormTypesEnum";

function FormTemplateCreator() {
  type FormElement = selectTemplate | checkboxTemplate | textFieldTemplate;

  const [formElements, setFormElements] = useState<FormElement[]>([]);

  const [textFieldInput, setTextFieldInput] = useState("");
  const [checkboxInput, setCheckboxInput] = useState("");
  const [selectInput, setSelectInput] = useState("");
  const [optionInputs, setOptionInputs] = useState<Record<number, string>>({});

  const order = useRef(0);

  const createTextField = (name: string) => {
    if (name.trim() === "") return;
    const newField: textFieldTemplate = {
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
      type: FormType.Checkbox,
      title: name,
      order: order.current,
    };
    order.current += 1;
    setFormElements((prev) => [...prev, newCheck]);
    setCheckboxInput("");
  };

  const createSelect = (name: string) => {
    if (name.trim() === "") return;
    const newSelect: selectTemplate = {
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
          {formElements.map((e) => {
            switch (e.type) {
              case FormType.Textfield:
                return (
                  <Box
                    key={e.order}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <TextFieldItem
                      type={FormType.Textfield}
                      title={e.title}
                      description=""
                      order={e.order}
                    />
                    <Button onClick={() => deleteElement(e)}>eliminar</Button>
                  </Box>
                );
              case FormType.Checkbox:
                return (
                  <Box key={e.order}>
                    <FormControlLabel
                      control={<Checkbox />}
                      key={e.order}
                      label={e.title}
                    />
                    <Button onClick={() => deleteElement(e)}>eliminar</Button>
                  </Box>
                );
              case FormType.Select:
                return (
                  <Box key={e.order}>
                    <SelectItem
                      type={e.type}
                      title={e.title}
                      order={e.order}
                      options={e.options}
                    />
                    <TextField
                      value={optionInputs[e.order] || ""}
                      onChange={(or) =>
                        setOptionInputs({
                          ...optionInputs,
                          [e.order]: or.target.value
                        })
                      }
                    />
                    <Button
                      onClick={() =>
                        addOptionToSelect(e.order, optionInputs[e.order])
                      }
                    >
                      Agregar opción
                    </Button>
                    <Button onClick={() => deleteElement(e)}>eliminar</Button>
                  </Box>
                );
            }
          })}
        </Box>
      </form>
    </Container>
  );
}

export default FormTemplateCreator;

import type { selectTemplate } from "../../../Interfaces/FormTemplate/selectTemplate.interface";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Box from "@mui/material/Box";


function SelectItem({ id, title, options }: selectTemplate) {

    const [selectedOption, setSelectedOption] = useState("")

    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})
    
        const style = {
            transition,
            transform: CSS.Transform.toString(transform)
        }

  return (
    <Box sx={{display:"flex", alignItems:"center"}}>
    <span ref={setNodeRef} {...attributes} {...listeners}  style={style} key={id}> <DragHandleIcon/> </span>
    <FormControl  fullWidth sx={{display:"flex",width:"10rem"}}>
      <InputLabel id="select-label">{title}</InputLabel>
      <Select labelId="select-label" label={title} value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.option}>
            {option.option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    </Box>
  );
}

export default SelectItem;

import Box from "@mui/material/Box";
import type { selectTemplate } from "../../../Interfaces/FormTemplate/selectTemplate.interface";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";


function SelectItem({ title, order, options }: selectTemplate) {

    const [selectedOption, setSelectedOption] = useState("")

  return (
    <Box key={order}>
      <Typography>{title}</Typography>
      <Select fullWidth value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.option}>
            {option.option}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}

export default SelectItem;

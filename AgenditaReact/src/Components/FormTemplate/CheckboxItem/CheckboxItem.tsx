import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import type { checkboxTemplate } from "../../../Interfaces/FormTemplate/checkboxTemplate.interface";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Box from "@mui/material/Box";

function CheckboxItem({ id, title }: checkboxTemplate) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <span
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
        key={id}
      >
        {" "}
        <DragHandleIcon />{" "}
      </span>
      <Box>
        <FormControlLabel
          control={<Checkbox />}
          key={id}
          label={title}
        />
      </Box>
    </Box>
  );
}

export default CheckboxItem;

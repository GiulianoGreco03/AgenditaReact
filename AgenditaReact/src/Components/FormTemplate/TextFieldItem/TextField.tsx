import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import type { textFieldTemplate } from "../../../Interfaces/FormTemplate/textFieldTemplate.interface"
import { CSS } from "@dnd-kit/utilities"
import { useSortable } from "@dnd-kit/sortable"
import DragHandleIcon from '@mui/icons-material/DragHandle';

function TextFieldItem({id, title, description}:textFieldTemplate){

const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    return(
        <Box key={id} sx={{display:"flex" , alignItems:"center"}}>
            <span ref={setNodeRef} {...attributes} {...listeners}  style={style} key={id}> <DragHandleIcon/> </span>
            <Box sx={{display:"flex", flexDirection:"column"}}>
            <Typography>{title}</Typography>
            <TextField label={title} value={description} required variant="outlined" sx={{width:500}}/>

            </Box>
        </Box>
    )
}

export default TextFieldItem
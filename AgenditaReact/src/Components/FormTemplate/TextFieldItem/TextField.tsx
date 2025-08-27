import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

function TextFieldItem({title, description, order}){
    return(
        <Box key={order} sx={{display:"flex",flexDirection:"column" , alignItems:"center"}}>
            <Typography>{title}</Typography>
            <TextField label={title} value={description} required variant="outlined" sx={{width:500}}/>
        </Box>
    )
}

export default TextFieldItem
import "./Navbar.css";
import { Link } from "react-router";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <div className="nav-container">
      <Link to={"/calendar"}><Button variant="contained" sx={{width:100}}>Calendario</Button> </Link>
      <Link to={"/form-creator"}><Button variant="contained" sx={{width:100}}>Crear plantilla</Button></Link>
      <Link to={"/calender"}><Button variant="contained" sx={{width:100}}>Tramites</Button></Link>
      <Link to={"/calender"}><Button variant="contained" sx={{width:100}}>Dashboard</Button></Link>
      <Link to={"/calender"}><Button variant="contained" sx={{width:100}}>Perfil</Button></Link>
    </div>
  );
}

export default Navbar;

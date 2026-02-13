
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box'
import Avatar from "@mui/material/Avatar";
import LightModeIcon from "@mui/icons-material/LightMode";


export default function Navbar() {

	return (
	 <AppBar position="fixed"
      color="inherit"
      elevation={1}
      sx={{
        ml: "260px",
        width: "calc(100% - 260px)"
      }}
    >
      <Toolbar>
        {/* pushes content to right */}
        <Box sx={{ flexGrow: 1 }} />

       
        <IconButton>
          <LightModeIcon />
        </IconButton>

      
        <Avatar sx={{ ml: 2 }} />
      </Toolbar>
    </AppBar>
  );
}

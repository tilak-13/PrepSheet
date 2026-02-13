import {Box, Toolbar } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AppLayout(){
    return (
        <Box sx = {{ display: "flex"}}>
            <Sidebar />
            <Navbar />

            <Box 
              component = "main"
              sx = {{
                flexgrow: 1,
                p: 3,
                ml: "260px"
              }}
            >
                <Toolbar />
                
            </Box>
        </Box>
    )
}
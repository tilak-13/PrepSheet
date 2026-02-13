import { Typography, Box } from '@mui/material'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Box sx={{ ml: "260px", pt:10, p:3 }}>
        <Typography variant="h4" align="center">
          Welcome to PrepSheet Dashboard
        </Typography>
      </Box>
    </>
  )
}

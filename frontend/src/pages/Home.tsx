import { Typography, Box } from '@mui/material'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <Box sx={{ p: 3, pt: 8, display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4" align="center">
          Welcome to PrepSheet Dashboard
        </Typography>
      </Box>
    </>
  )
}

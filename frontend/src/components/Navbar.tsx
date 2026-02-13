
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom'
import { logoutMock } from '../lib/auth'

export default function Navbar() {
	const navigate = useNavigate()

	const handleLogout = () => {
		logoutMock()
		navigate('/login')
	}

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div">
					PrepSheet
				</Typography>
				<Box sx={{ flexGrow: 1 }} />
				<Button color="inherit" onClick={handleLogout}>
					Logout
				</Button>
			</Toolbar>
		</AppBar>
	)
}

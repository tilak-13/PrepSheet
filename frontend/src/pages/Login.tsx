import React, { useState } from 'react'
import { Box, Paper, Stack, Typography, TextField, Button, Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { loginMock } from '../lib/auth';


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError('Email and password are required.');
      return;
    }

    setError(null);

    // mock login for now
    loginMock();
    navigate('/home');};


  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: '100vw', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey.50' }}>
      <Paper elevation={6} sx={{ p: 4, width: '100%', maxWidth: 420, borderRadius: 3 }}>
        <Stack spacing={2}>
          <Box>
            <Typography variant="h5" component="h1" align="center">
              PrepSheet Login
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Enter your credentials to access the sales dashboard
            </Typography>
          </Box>

          {error && (
            <Alert severity="error">
              {error}
            </Alert>
          )}

          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            autoComplete="email"
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            autoComplete="current-password"
          />

          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ py: 1.2 }}>
            Sign in
          </Button>
        </Stack>
      </Paper>
    </Box>
  )
}


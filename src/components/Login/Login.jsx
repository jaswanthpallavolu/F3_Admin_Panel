import React, { useState } from 'react'
import { Input, Button, Alert } from '@mui/material'
import './login.css'
import { useHistory } from 'react-router-dom'
import { useMyContext } from '../../context/context'

export default function Login() {
    const history = useHistory()
    const { secure } = useMyContext()
    const { Login } = secure

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePswd = (e) => {
        setPassword(e.target.value)
    }
    const handleLogin = async () => {
        try {
            setError('');
            setLoading(true);
            if (!email || !password) {
                setError('Fill all inputs')
                setLoading(false);
                return;
            }
            await Login(email, password);
            history.push('/');
        } catch {
            setError('Failed to signin');
            setLoading(false);
        }


    }

    return (
        <div className="login">
            <form className="form">
                {error ? <Alert color='error' sx={{ marginBottom: '-1rem' }} severity="error">{error}</Alert> : ''}
                <span>Admin Login</span>
                <Input type="email" placeholder="Enter email" color='secondary' variant='outlined' onChange={handleEmail} />
                <Input type='password' placeholder="Enter Password" color='secondary' autoComplete="off" onChange={handlePswd} />
                <Button disabled={loading} size="medium" color="secondary" variant="contained" onClick={handleLogin}>Login</Button>
            </form>
        </div>
    )
}

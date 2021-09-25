import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
import './navbar.css'
import { useMyContext } from '../../context/context'

export default function Navbar() {
    const { secure } = useMyContext()
    const { Logout } = secure
    const handleLogout = async () => {
        try {
            await Logout()
        }
        catch {
            console.log('error')
        }
    }
    return (
        <div className="navbar">
            <span>ADMIN</span>
            <ul className='nav'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/nutrition'>Nutrition</NavLink></li>
                <li><NavLink to='/fitness'>Fitness</NavLink></li>
            </ul>
            <Button size='large' color='secondary' variant='outlined' onClick={handleLogout}>Logout</Button>
        </div>
    )
}

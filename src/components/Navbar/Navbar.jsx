import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';

import { useMyContext } from '../../context/context'

import './navbar.css'
import './responsive_nav.css'

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
            <div className="logo">F3 ADMIN</div>
            <input type="checkbox" name="" id="toggle-btn" className='toggle-btn' />
            <ul className='nav'>
                <li><NavLink exact activeClassName="active" className="link" to='/admin'>Home</NavLink></li>
                <li><NavLink activeClassName="active" className="link" to='/admin/nutrition'>Nutrition</NavLink></li>
                <li><NavLink activeClassName="active" className="link" to='/admin/fitness'>Fitness</NavLink></li>
                <li className="logout"><Button size='small' color='secondary' variant='outlined' onClick={handleLogout} startIcon={<LogoutIcon />}>Logout</Button></li>
            </ul>


            <label htmlFor="toggle-btn" className="lable-btn">
                <span className="burger"></span>
            </label>

        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

export default function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <Link to="/nutrition"><Button size="large" color='info' variant='outlined'>Nutrition</Button></Link>

            <ul style={{ listStyle: 'none', marginTop: '5rem' }}>
                <li><h3>API Routes</h3></li>
                <li>https://f3-health-api.herokuapp.com/nutrition/category/</li>
                <li>https://f3-health-api.herokuapp.com/nutrition/category/:id</li>
            </ul>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <Link to="/nutrition">Nutrition</Link>
            <ul>
                <li>https://f3-health-api.herokuapp.com/nutrition/category/</li>
                <li>https://f3-health-api.herokuapp.com/nutrition/category/:id</li>
            </ul>
        </div>
    )
}

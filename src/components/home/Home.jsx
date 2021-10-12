import React from 'react'
import './home.css'


export default function Home() {


    return (
        <div className="home">
            <h1>Home page</h1>
            <ol style={{ marginTop: '5rem' }}>
                <li><h3>API Routes</h3></li>
                <li>https://f3-health-api.herokuapp.com/nutrition/category/</li>
                <li>https://f3-health-api.herokuapp.com/nutrition/category/:id</li>
                <li>https://f3-health-api.herokuapp.com/fitness/categories/</li>
                <li>https://f3-health-api.herokuapp.com/fitness/categories/:id</li>
            </ol>
        </div>
    )
}

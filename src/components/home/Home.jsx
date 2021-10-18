import React from 'react'
import './home.css'


export default function Home() {


    return (
        <div className="home">

            <ol style={{ marginTop: '5rem', display: 'grid', placeItems: 'center', listStyle: 'none' }}>
                <li><h3>API Routes</h3></li>
                <li>https://f3-health-api.herokuapp.com/nutrition/category/</li>
                <li>https://f3-health-api.herokuapp.com/nutrition/category/:id</li>
                <li>https://f3-health-api.herokuapp.com/nutrition/item/:id</li>
                <li>https://f3-health-api.herokuapp.com/fitness/categories/</li>
                <li>https://f3-health-api.herokuapp.com/fitness/categories/:id</li>
            </ol>
        </div>
    )
}

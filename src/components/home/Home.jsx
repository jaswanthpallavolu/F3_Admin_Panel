import React from 'react'
import './home.css'


export default function Home() {


    return (
        <div className="home">

            <ol >
                <li className='title'>API Routes</li>
                <li className="sub">Nutrition</li>
                <li>https://f3-health-api.herokuapp.com/nutrition/category/</li>
                <li>https://f3-health-api.herokuapp.com/nutrition/category/:id</li>
                <li>https://f3-health-api.herokuapp.com/nutrition/item/:id</li>
                <li className="sub">fitness</li>
                <li>https://f3-health-api.herokuapp.com/fitness/categories/</li>
                <li>https://f3-health-api.herokuapp.com/fitness/categories/:id</li>
            </ol>
        </div>
    )
}

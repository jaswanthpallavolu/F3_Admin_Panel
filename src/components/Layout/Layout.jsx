import React from 'react'
import PrivateRoute from '../../PrivateRoute'

import Navbar from '../Navbar/Navbar'
import Home from '../home/Home'
import Nutrition from '../nutrition/Nutrition'
import Fitness from '../fitness/Fitness'

import './layout.css'

export default function Layout() {

    return (
        <>
            <Navbar />
            <div className="sec2">
                <PrivateRoute exact path='/admin' component={Home} />
                <PrivateRoute path='/admin/nutrition' component={Nutrition} />
                <PrivateRoute path='/admin/fitness' component={Fitness} />
            </div>
        </>
    )
}

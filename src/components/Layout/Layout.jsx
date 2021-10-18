import React from 'react'
import PrivateRoute from '../../PrivateRoute'

import Navbar from '../Navbar/Navbar'
import Home from '../home/Home'
import Nutrition from '../nutrition/Nutrition'
import Fitness from '../fitness/Fitness'
import MoreDetails from '../nutrition/More'
import './layout.css'

export default function Layout() {

    return (
        <>
            <Navbar />
            <div className="sec2">
                <PrivateRoute exact path='/admin' component={Home} />
                <PrivateRoute exact path='/admin/nutrition' component={Nutrition} />
                <PrivateRoute path='/admin/nutrition/item' component={MoreDetails} />
                <PrivateRoute path='/admin/fitness' component={Fitness} />
            </div>
        </>
    )
}

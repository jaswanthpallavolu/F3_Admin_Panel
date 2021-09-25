import React from 'react'
import { Switch } from 'react-router-dom'
import PrivateRoute from '../../PrivateRoute'

import Navbar from '../Navbar/Navbar'
import Home from '../home/Home'
import Nutrition from '../nutrition/Nutrition'

import './layout.css'

export default function Layout() {
    return (
        <div className="layout">
            <Navbar />
            <div className="sec2">
                <Switch>
                    <PrivateRoute exact path='/' component={Home} />
                    <PrivateRoute path='/nutrition' component={Nutrition} />
                </Switch>
            </div>
        </div>
    )
}

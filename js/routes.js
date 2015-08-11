import React from 'react'
import Router from 'react-router'
import { DefaultRoute, Route } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Live from './components/Live'
import Slide from './components/Slide'

let routes = (
    <Route name="app" path ="/" handler={App}>
        <DefaultRoute handler={Home}/>
        <Route name="slide" path="slides/:id" handler={Slide}/>
        <Route name="live" path="live" handler={Live}/>
    </Route>
)

export default routes

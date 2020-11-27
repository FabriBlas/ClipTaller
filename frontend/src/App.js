import React from 'react'
import { BrowserRouter,Switch,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

/* Components */
import Home from "./components/layout/Home/Home"



export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home}></Route>
            </Switch>
        </BrowserRouter>
    )
}

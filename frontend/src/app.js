import React from 'react'
import { BrowserRouter,Switch,Route } from "react-router-dom";

/* Bootstrap library */
import 'bootstrap/dist/css/bootstrap.min.css'

/* Components */
/* All componente should be import with a initial capital letter because react
works in this way */
import Home from "./components/view/Home/Home"

/* Routes of the project */
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* All routes to block content should be added here */}
        <Route path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  )
}

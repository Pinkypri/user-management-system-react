import React from 'react'
import  './App.css'
import {BrowserRouter as Router,Switch,Route}from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Contact from "./Pages/Contact";
import {GlobalProvider} from "./Context/GlobalState"
const App = () => {
  return (
<GlobalProvider>
 <Router>
   <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/users" exact component={User}/>
     <Route path="/contact" exact component={Contact}/>
   </Switch>
 </Router>
</GlobalProvider>
  )
}

export default App


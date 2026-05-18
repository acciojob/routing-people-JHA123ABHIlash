
import React from "react";
import './../styles/App.css';
import {Switch,Route} from 'react-router-dom'
import UserDetails from "./UserDetails";
import UserList from "./UserList";
import "regenerator-runtime/runtime";


const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    <Switch>
      <Route exact path="/" component={UserList}/>
      <Route path="/users/:id" component={UserDetails}/>
    </Switch>

    </div>
  )
}

export default App

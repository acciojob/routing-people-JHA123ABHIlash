import React from 'react'
import UserList from './UserList'
import { Route, Switch } from 'react-router-dom'
import UserDetails from './UserDetails'

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={UserList}/>
        <Route path='/users/:id' component={UserDetails}/>
      </Switch>
    </div>
  )
}

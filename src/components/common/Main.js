import React from 'react'
import Nav from './Nav'
import Feed from './Feed'
import { Route } from 'react-router-dom'
import UserFeed from '../user/UserFeed'


function Main() {

  const [input, setInput] = React.useState('')

  return (

    <>
      <Nav setInput={setInput} />

      <Route path="/feed" component={Feed} >
        <Feed input={input} />
      </Route>

      <Route path="/profile/:userId" component={UserFeed}>
        <UserFeed input={input} />
      </Route>
    </>

  )
}

export default Main


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/auth/Home'
import Feed from './components/common/Feed'
import UserFeed from './components/user/UserFeed'
import Nav from './components/common/Nav'

function App() {
  return (

    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/feed" component={Feed} />
        <Route path="/profile/:userId" component={UserFeed} />
      </Switch>
    </Router>
  )
}

export default App

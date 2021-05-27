import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/auth/Home'
import Feed from './components/common/Feed'
import UserFeed from './components/user/UserFeed'
import Nav from './components/common/Nav'
import Main from './components/common/Main'

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Main />
      </Switch>
    </Router>
  )
}

export default App

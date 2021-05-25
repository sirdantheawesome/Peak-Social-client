import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/auth/Home'
import Feed from './components/common/Feed'
import PostNew from './components/posts/PostNew'
import PostIndex from './components/posts/PostIndex'
import UserFeed from './components/user/UserFeed'
import SecureRoute from './components/common/SecureRoute'
import Nav from './components/common/Nav'


function App() {
  return (

    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path ="/feed" component={Feed}/>
        <Route path="/profile" component={UserFeed}/>
        <SecureRoute path="/posts/new" component={PostNew}/>
        <Route path="/posts/all" component={PostIndex}/>
        <Route path="/profile/:userId" component={UserProfile} />
        <SecureRoute path="/posts/new" component={PostNew} />
      </Switch>
    </Router>

  )
}

export default App

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/common/Home'
import PostNew from './components/posts/PostNew'
import PostIndex from './components/posts/PostIndex'
import UserProfile from './components/user/UserProfile'
import SecureRoute from './components/common/SecureRoute'


function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/profile" component={UserProfile}/>
        <SecureRoute path="/posts/new" component={PostNew}/>
        <Route path="/posts/all" component={PostIndex}/>
      </Switch>
    </Router>
  
  )
}

export default App

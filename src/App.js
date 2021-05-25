import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/auth/Home'
import Feed from './components/common/Feed'
import UserFeed from './components/user/UserFeed'
import Nav from './components/common/Nav'
import PostCard from './components/posts/PostCard'

function App() {
  return (

    <Router>
      <Nav />
      <PostCard title={'A great title for a card'} text={'A great piece of interesting content for a card'} image={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/feed" component={Feed} />
        <Route path="/profile/:userId" component={UserFeed} />
      </Switch>
    </Router>
  )
}

export default App

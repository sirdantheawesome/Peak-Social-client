import PostIndex from '../posts/PostIndex'
import UserCard from '../user/UserCard'
import { isAuthenticated } from '../../lib/auth'
import Popup from 'reactjs-popup'
import PostNew from '../posts/PostNew'

function Feed() {

  return (
    <>

      <div className="columns">
        <div className="column">
          <UserCard />
        </div>
        <div className="column is-half">
          <div className="block">
            <input className="input is-medium" type="text" placeholder="Whats on your mind??" />
            {isAuthenticated() && (
              <Popup trigger={<button className="button">create new post</button>} position="bottom center">
                <div >
                  <PostNew/>
                </div>
              </Popup>
            )}

          </div>
          <div className="block">
            <PostIndex />
          </div>
        </div>
        <div className="column">
          <p>Following</p>
        </div>
      </div>

    </>

  )
}

export default Feed
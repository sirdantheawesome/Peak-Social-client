import React from 'react'
import PostIndex from '../posts/PostIndex'
import UserCard from '../user/UserCard'
import { isAuthenticated } from '../../lib/auth'
import PostNew from '../posts/PostNew'

function Feed() {

  const [popup, setPopup] = React.useState('modal')

  const handleClick = () => {
    setPopup('modal is-active')
  }

  const handleClose = () => {
    setPopup('modal')
  }
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
              <>
                <button onClick={handleClick} className="button"> create a new post</button>
                <div className={popup}>
                  <div className="modal-background"></div>
                  <div className="modal-card">
                    <header className="modal-card-head">
                      <p className="modal-card-title">Create a new post!</p>
                      <button onClick={handleClose} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                      <PostNew setPopup={setPopup} />
                    </section>
                  </div>
                </div>
              </>
            )}

          </div>
          <div className="block">
            <PostIndex popup={popup} />
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
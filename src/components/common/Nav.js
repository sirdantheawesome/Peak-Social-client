import { Link, useHistory } from 'react-router-dom'
import { getCurrentUserId, isAuthenticated, removeToken } from '../../lib/auth'
import React from 'react'

function Nav({ setInput }) {



  const history = useHistory()
  const isLoggedIn = isAuthenticated()

  const handleLogout = () => {
    removeToken()
    history.push('/')
  }

  const handleInput = (e) => {
    setInput(e.target.value)

  }

  return (
    <nav className="navbar is-light">
      <div className="container">
        <div className="navbar-start">
          <Link to="/feed" className="navbar-item">
            <img className='image' src='https://www.acousticbulletin.com/wp-content/uploads/2020/01/70-706384_illuminati-clipart-all-illuminati-logo-png.png' />
          </Link>
        </div >
        <div className="container">
          <div className="navbar-item">
            <input onKeyUp={handleInput} className="input" type="text" placeholder="Search" />
          </div>
        </div>
        <div className="navbar-end">
          <div className="container">
            <div className="navbar-item">
              {isLoggedIn && <Link to={`/profile/${getCurrentUserId()}`} className="button">
                Profile
              </Link>}
            </div>
          </div>
          <div className="container">
            <div className="navbar-item">
              {!isLoggedIn ?
                <>
                  <Link to="/" className="button is-warning">
                    Log In / Register
                  </Link>
                </>
                :
                <button
                  className="button is-warning"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              }
            </div>
          </div>
        </div>
      </div >
    </nav >)
}

export default Nav
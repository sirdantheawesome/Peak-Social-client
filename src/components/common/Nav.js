import { Link } from 'react-router-dom'

function Nav() {
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
            <input className="input" type="text" placeholder="Search" />
          </div>
        </div>
        <div className="navbar-end">
          <div className="container">
            <div className="navbar-item">
              <Link to='/profile/:userId' className="button">
                Profile
              </Link>
            </div>
          </div>
          <div className="container">
            <div className="navbar-item">
              <Link to='/' className="button">
                Login/Register
              </Link>
            </div>
          </div>
        </div>
      </div >
    </nav >)
}

export default Nav
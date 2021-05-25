import React from 'react'
import axios from 'axios'

function UserFeed() {


  const [post, setPost] = React.useState(null) 
  React.useEffect(() => {
    const getData = async () => {
      const response = await axios.get('')
      setPost(response.data)
    }
    getData()
  },[])

  

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
          PEEK
              </a>
            </div>
            <div className="control">
              <input className="input" type="text" placeholder="Search..."/>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-dark">Followers</a>
                  <a className="button is-link">PEEK Coins</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero is-link is-fullheight-with-navbar">
        {/* <div className="hero-body"> */}
        <div className="columns">
          <div className="column">
            <p>user profile</p>
          </div>
          <div className="column is-half">
            <div className="block">
              <input className="input is-medium" type="text" placeholder="Whats on your mind??"/>
            </div>
            {/* <div className="control">
              <input className="input is-medium" type="text" placeholder="Whats on your mind??"/>
            </div> */}
            <div className="block">
              <img src ="https://cdn.mos.cms.futurecdn.net/c7GYXE3TEQvvFGDZDvXDTT.jpg" alt="/"/>
              <img src ="https://cdn.mos.cms.futurecdn.net/c7GYXE3TEQvvFGDZDvXDTT.jpg" alt="/"/>
              <img src ="https://cdn.mos.cms.futurecdn.net/c7GYXE3TEQvvFGDZDvXDTT.jpg" alt="/"/>
            </div>
          </div>
          <div className="column">
            <p>Following</p>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default UserFeed

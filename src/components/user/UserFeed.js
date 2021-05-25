import React from 'react'
import axios from 'axios'

import UserCard from './UserCard'

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
      <section className="hero is-link is-fullheight-with-navbar">
        <div className="columns">
          <div className="column">
            <UserCard />
          </div>
          <div className="column is-half">
            <div className="block">
              <input className="input is-medium" type="text" placeholder="Whats on your mind??"/>
            </div>
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
      </section>
    </>
  )
}

export default UserFeed

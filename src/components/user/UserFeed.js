import React from 'react'
import { useParams } from 'react-router-dom'
import UserCard from './UserCard'

import { likePost } from '../../lib/api'

function UserFeed() {

  const { postId } = useParams()
  const [post, setPost] = React.useState(null) 

  React.useEffect(() => {
    const getData = async () => {
      const response = await likePost(postId)
      setPost(response.data)
    }
    getData()
  },[postId])



  

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

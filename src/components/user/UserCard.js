
import { useParams } from 'react-router-dom'
import { isAuthenticated } from '../../lib/auth'
import { getSingleUser } from '../../lib/api'
import React from 'react'


/// get user 

function UserCard() {
  console.log('UserCard is on')
  const isLoggedIn = isAuthenticated()
  const { userId } = useParams()
  const [user, setUser] = React.useState(null)
  const following = []

  const handleEdit = () => {
    console.log('click')
  }

  const handleFollow = () => {
    console.log(userId)
  }

  React.useEffect(() => {
    const getData = async () => {
      try {
        console.log('im trying')
        const response = await getSingleUser(userId)
        setUser(response.data)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [userId])
  console.log('user: ', user)
  if (!user) return null
  return (
    <div className="user-card">
      <div className="card-image">
        <figure className="image is-128x128">
          <img className="is-rounded" src={user.image} alt={user.username} />
        </figure>
        <br />
      </div>
      <div className="content">
        <p>{user.username}</p> <p>PeekCoins : {user.peekcoin}</p>
        <br />
        <p>{user.summary}</p>
      </div>
      {isLoggedIn ?
        <button className="button is-outlined" onClick={handleEdit}>Edit Profile</button>
        :
        <button className="button is-outlined" onClick={handleFollow}>Follow</button>
      }

    </div>

  )
}

export default UserCard
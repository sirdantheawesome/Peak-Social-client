
import { useParams } from 'react-router-dom'
import { isAuthenticated } from '../../lib/auth'


/// get user 

function UserCard({ username, image, summary, peekcoin }) {
  const isLoggedIn = isAuthenticated()
  const { userId } = useParams()
  const following = []

  const handleEdit = () => {
    console.log('click')
  }
  const handleFollow = () => {
    console.log(userId)
  }
  
  return (
    <div className="user-card">
      <div className="card-image">
        <figure className="image is-128x128">
          <img className="is-rounded"src={image} alt={username}/>
        </figure>
        <br/>
      </div>
      <div className="content">
        <p>{username}</p> <p>PeekCoins : {peekcoin}</p>
        <br/>
        <p>{summary}</p>
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
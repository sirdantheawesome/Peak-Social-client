
const isUser = true

function UserCard({ username, image, summary, peekcoin }) {

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
      {isUser ? 
        <button className="button is-outlined">Edit Profile</button>  
        :
        <button className="button is-outlined">Follow</button>
      }
      
    </div> 
  
  )
}

export default UserCard


function UserCard() {

  return (

    <div className="user-card">
      <div className="card-image">
        <figure className="image is-128x128">
          <img className="is-rounded"src="https://i.pinimg.com/originals/c2/25/6b/c2256bd05b6cf1e26c5796845daa4bf4.png" alt="Placeholder image"/>
        </figure>
        <br/>
      </div>
      <div className="content">
        <p>Name</p>
        <br/>
      This is my summary
      </div>
      <button className="button is-outlined">Edit Profile</button>
    </div> 
  )
}

export default UserCard
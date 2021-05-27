
import { useParams } from 'react-router-dom'
import { isAuthenticated } from '../../lib/auth'
import { getSingleUser } from '../../lib/api'
import React from 'react'


function UserCard() {
  console.log('UserCard is on')
  const isLoggedIn = isAuthenticated()
  const { userId } = useParams()
  const [user, setUser] = React.useState(null)
  const [popup, setPopup] = React.useState('modal')


  const handleClick = () => {
    console.log('click')
    setPopup('modal is-active')
  }

  const handleClose = () => {
    console.log('close')
    setPopup('modal')
  }

  const handleChange = (e) => {
    console.log(e.target.value)
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
        <button className="button is-outlined" onClick={handleClick}>Edit Profile</button>
        :
        <button className="button is-outlined">Follow</button>
      }
      <div className={popup}>
        <section className="modal-card-body">
          <div className="modal"></div>
          <div className="modal-content">
            <div className="field">
              <label className="label" htmlFor>Profile Name</label>
              <div className="control">
                <input 
                  className="input" 
                  type="text" 
                  placeholder="Your Profile Name"
                  onChange={handleChange}/>
                  
              </div>
            </div>

            <div className="field">
              <label className="label"> Profile Picture </label>
              <div className="control">
                <input 
                  className="input" 
                  type="email" 
                  placeholder="Image Url..."
                  onChange={handleChange}/>
              </div>
            </div>

            <div className="field">
              <label className="label">Summary</label>
              <div className="control">
                <textarea 
                  className="textarea" 
                  type="email" 
                  placeholder="About you..."
                  onChange={handleChange}/>
              </div>
            </div>
            
            <button 
              onClick={handleClose} 
              className="delete" 
              aria-label="close"/>
            <button 
              type="submit">Update Profile</button>
          </div>
        </section>
      </div>
    </div>

  )
}

export default UserCard
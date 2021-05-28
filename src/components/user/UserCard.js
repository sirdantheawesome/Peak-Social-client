import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { isAuthor } from '../../lib/auth'
import { getSingleUser, editUser } from '../../lib/api'
import { useForm } from '../../hooks/useForm'


function UserCard() {
  
  const { userId } = useParams()
  const [user, setUser] = React.useState(null)
  const [popup, setPopup] = React.useState('modal')
  const { formdata, setFormdata, formErrors, setFormErrors, handleChange } = useForm( {
    username: '',
    image: '',
    summary: '',
  })
  const history = useHistory()




  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getSingleUser(userId)
        setFormdata(response.data)
        setUser(response.data)
        console.log(response.data)
      } catch (err) {
        setFormErrors(err.response.data.errors)
        console.log(err)
      }
    }
    getData()
  }, [userId, setFormdata, setFormErrors])

  const handleClick = () => {
    console.log('click')
    setPopup('modal is-active')
  }

  const handleClose = () => {
    console.log('close')
    setPopup('modal')
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      editUser(userId, formdata)
      // handleClose()
      history.push('/feed')
    } catch (err) {
      setFormErrors(err.response.data.errors)
      console.log(formErrors)
    }
  
  }


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
      {isAuthor(userId) ?
        <button className="button is-outlined" onClick={handleClick}>Edit Profile</button>
        :
        <div/>
      }
      <div className={popup}>
        <section className="modal-card-body">
          <div className="modal"></div>
          <div className="modal-content">
            <div className="field">
              <label className="label" htmlFor>Profile Name</label>
              <div className="control">
                <input 
                  className={`input ${formErrors.username ? 'is-danger' : ''}`} 
                  type="text" 
                  placeholder="Your Profile Name"
                  name="username"
                  onChange={handleChange}
                  value={formdata.username}
                />
                  
              </div>
            </div>

            <div className="field">
              <label className="label"> Profile Picture </label>
              <div className="control">
                <input 
                  className={`input ${formErrors.image ? 'is-danger' : ''}`} 
                  type="text" 
                  placeholder="Image Url..."
                  name="image"
                  onChange={handleChange}
                  value={formdata.image}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Summary</label>
              <div className="control">
                <textarea 
                  className={`input ${formErrors.summary ? 'is-danger' : ''}`} 
                  type="text" 
                  placeholder="About you..."
                  name="summary"
                  onChange={handleChange}
                  value={formdata.summary}
                />
              </div>
            </div>
            
            <button 
              onClick={handleClose} 
              className="delete" 
              aria-label="close"/>
            <button 
              type="submit" 
              onClick={handleSubmit}
            > Update Profile</button>
          </div>
        </section>
      </div>
    </div>

  )
}

export default UserCard
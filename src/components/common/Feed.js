import React from 'react'
import PostIndex from '../posts/PostIndex'
import { isAuthenticated } from '../../lib/auth'
import PostNew from '../posts/PostNew'
import { useHistory } from 'react-router'
import { useForm } from '../../hooks/useForm'
import { createPost } from '../../lib/api'

function Feed({ input }) {
  const history = useHistory()
  const [popup, setPopup] = React.useState('modal')

  const { formdata, handleChange } = useForm({
    title: 'whats on my mind',
    text: '',
  })



  const handleClose = () => {
    setPopup('modal')
  }

  const handleSubmit = async () => {

    if (!isAuthenticated()) {
      history.push('/')
    }

    try {
      await createPost(formdata)

      history.push('/feed')
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = () => {
    if (formdata.title === 'whats on my mind' && formdata.text.length > 1) {
      handleSubmit()
      history.push('/feed')
      location.reload()
    } else {
      setPopup('modal is-active')
    }
  }


  return (
    <>

      <div className="columns is-desktop">
        <div className="column">
        </div>
        <div className="column is-full-mobile is-full-tablet is-two-thirds-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
          <div className="block">

            <form onSubmit={handleSubmit} >
              <input onChange={handleChange} className="input is-medium" type="text" name="text" placeholder="Whats on your mind??" />
            </form>


            {isAuthenticated() && (
              <>
                <button onClick={handleClick} className="button"> create a new post</button>
                <div className={popup}>
                  <div className="modal-background"></div>
                  <div className="modal-card">
                    <header className="modal-card-head">
                      <p className="modal-card-title">Create a new post!</p>
                      <button onClick={handleClose} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                      <PostNew setPopup={setPopup} />
                    </section>
                  </div>
                </div>
              </>
            )}

          </div>
          <div className="block">
            <PostIndex popup={popup} input={input} />
          </div>
        </div>
        <div className="column">
        </div>
      </div>

    </>

  )
}

export default Feed
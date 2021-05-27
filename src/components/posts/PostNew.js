import React from 'react'
import { useHistory } from 'react-router-dom'
import { createPost } from '../../lib/api'
import { useForm } from '../../hooks/useForm'


function PostNew({ setPopup }) {
  const history = useHistory()
  // const [popup, setPopup] = React.useState('modal is-active')
  const { formdata, formErrors, setFormErrors, handleChange } = useForm({
    title: '',
    text: '',
    image: '',
  })

  // const handleChange = (e) => {
  //   setFormData({ ...formdata, [e.target.name]: e.target.value })
  // }

  // console.log(setPopup)

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await createPost(formdata)

      history.push('/feed')
      setPopup('modal')
    } catch (err) {
      setFormErrors(err.response.data.errors)
    }
  }

  return (
    <section className="box">
      <div className="popup-content">
        <div className="column is-centered">
          <form
            className="column is-full"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label" htmlFor="title" >Title</label>
              <div className="control">
                <input
                  className={`input ${formErrors.title ? 'is-danger' : ''}`}
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                  value={formdata.title}
                />
              </div>
              {formErrors.title && <p className="help is-danger">Title is required</p>}
            </div>
            <div className="field">
              <label className="label" htmlFor="text" >Text</label>
              <div className="control">
                <input
                  className={`input ${formErrors.text ? 'is-danger' : ''}`}
                  placeholder="text"
                  name="text"
                  onChange={handleChange}
                />
              </div>
              {formErrors.text && <p className="help is-danger">Text is required</p>}
            </div>
            <div className="field">
              <label className="label" htmlFor="image">Image</label>
              <div className="control">
                <input
                  className={`input ${formErrors.image ? 'is-danger' : ''}`}
                  placeholder="Image URL"
                  name="image"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-info is-fullwidth">
                Add Post!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default PostNew
import React from 'react'
import { useHistory } from 'react-router-dom'
import { editPost, getSinglePost } from '../../lib/api'
import { useForm } from '../../hooks/useForm'

function PostEdit({ setPopup1, postId, handleUpdatePosts }) {
  const history = useHistory()

  const { formdata, handleChange, formErrors, setFormErrors, setFormdata } = useForm({
    title: '',
    text: '',
    image: '',
  })

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSinglePost(postId)
        setFormdata(res.data)
      } catch (err) {
        setFormErrors(err.response.data.errors)
      }

    }
    getData()
  }, [postId, setFormdata, setFormErrors])

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await editPost(postId, formdata)
      history.push('/feed')
      setPopup1('modal')
      handleUpdatePosts(res.data)
      location.reload()
    } catch (err) {
      console.log(err.response.data.errors)
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
                  value={formdata.text}
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
                  value={formdata.image}
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-info is-fullwidth">
                Edit Post!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default PostEdit
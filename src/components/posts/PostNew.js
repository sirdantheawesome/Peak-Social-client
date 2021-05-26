import React from 'react'
import { useHistory } from 'react-router-dom'
import { createPost } from '../../lib/api'

function PostNew() {
  const history = useHistory()
  const [formdata, setFormData] = React.useState({
    title: '',
    text: '',
    image: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await createPost(formdata)

      history.push('/feed')
    } catch (err) {
      console.log(err)
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
                  className="input"
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="text" >Text</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="text"
                  name="text"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="image">Image</label>
              <div className="control">
                <input
                  className="input"
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
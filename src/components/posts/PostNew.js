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

  const handleChange = (e)=>{
    setFormData({...formdata, [e.target.name]: e.target.value})
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
    // <section className="section">
    //   <div className="container">
        <div className="columns">
          <form
            className="column is-half is-offset-one-quarter "
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label" htmlFor="name" >Name</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="polarPattern" >Polar Pattern</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Polar Pattern"
                  name="polarPattern"
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
    //   </div>
    // </section>
  )
}

export default PostNew
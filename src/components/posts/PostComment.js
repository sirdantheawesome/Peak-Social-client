import React from 'react'
import { createComment, getSinglePost } from '../../lib/api'
import { useForm } from '../../hooks/useForm'


function PostComment({ setPopupComment, postId, handleUpdatePosts }) {
  const { formdata, formErrors, setFormErrors, handleChange } = useForm({
    text: '',
  })


  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await createComment(postId, formdata)
      setPopupComment('modal')
      const res = await getSinglePost(postId)
      handleUpdatePosts(res.data)
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
              <button type="submit" className="button is-info is-fullwidth">
                Add Comment!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default PostComment
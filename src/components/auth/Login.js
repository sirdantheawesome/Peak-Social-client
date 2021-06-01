import React from 'react'
import { useHistory } from 'react-router'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'
import { useForm } from '../../hooks/useForm'

function Login() {
  const history = useHistory()
  const [isError, setIsError] = React.useState(false)
  const { formdata, handleChange } = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await loginUser(formdata)
      setToken(res.data.token)
      history.push('/feed')
    } catch (err) {
      setIsError(true)
    }
  }

  return (

    <div className="container">
      <form
        className="column is-half is-offset-one-quarter"
        onSubmit={handleSubmit}
      >
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>
        {isError && (
          <p className="help is-danger">
            Either email or password were incorrect
          </p>
        )}
        <div className="field">
          <button type="submit" className="button is-fullwidth is-warning">
            Log Me In!
          </button>
        </div>
      </form>
    </div>


  )
}

export default Login
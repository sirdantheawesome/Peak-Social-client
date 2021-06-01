import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useHistory } from 'react-router'
import { registerUser, loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'

function Register() {

  const history = useHistory()
  const { formdata, formErrors, setFormErrors, handleChange } = useForm({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })


  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await registerUser(formdata)
      const res = await loginUser(formdata)
      setToken(res.data.token)
      history.push('/feed')
    } catch (err) {
      setFormErrors(err.response.data.errors)
    }
  }


  return (


    <div className="container ">
      <form
        className="column is-half is-offset-one-quarter "
        onSubmit={handleSubmit}
      >
        <div className="field">
          <label className="label" htmlFor="username">Username</label>
          <div className="control">
            <input
              className={`input ${formErrors.username ? 'is-danger' : ''}`}
              placeholder="Username"
              onChange={handleChange}
              name="username"
              id="username"
            />
          </div>
          {formErrors.username && (
            <small className="help is-danger">Username is required</small>
          )}
        </div>
        <div className="field">
          <label className="label" htmlFor="email">Email</label>
          <div className="control">
            <input
              className={`input ${formErrors.email ? 'is-danger' : ''}`}
              placeholder="Email"
              onChange={handleChange}
              name="email"
              id="email"
            />
          </div>
          {formErrors.email && (
            <small className="help is-danger">Email is required</small>
          )}
        </div>
        <div className="field">
          <label className="label" htmlFor="password">Password</label>
          <div className="control">
            <input
              type="password"
              className={`input ${formErrors.password ? 'is-danger' : ''}`}
              placeholder="Password"
              onChange={handleChange}
              name="password"
              id="password"
            />
          </div>
          {formErrors.password && (
            <small className="help is-danger">Password is required</small>
          )}
        </div>
        <div className="field">
          <label className="label" htmlFor="passwordConformation">Password Confirmation</label>
          <div className="control">
            <input
              type="password"
              className={`input ${formErrors.passwordConformation ? 'is-danger' : ''}`}
              placeholder="Password Confirmation"
              onChange={handleChange}
              name="passwordConfirmation"
              id="passwordConfirmation"
            />
          </div>
          {formErrors.passwordConformation && (
            <small className="help is-danger">{formErrors.passwordConformation}</small>
          )}
        </div>
        <div className="field">
          <button type="submit" className="button is-fullwidth is-warning">
            Register Me!
          </button>
        </div>
      </form>
    </div>


  )
}

export default Register
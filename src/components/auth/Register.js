import React from 'react'
import { useForm } from '../../hooks/useForm'
// import { useHistory } from 'react-router'
import { registerUser } from '../../lib/api'

function Register() {

  // const history = useHistory()
  const { formdata, formErrors, setFormErrors, handleChange } = useForm({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await registerUser(formdata)
      // history.push('/login')
    } catch (error) {
      setFormErrors(error.response.data.errors)
    }
  }

  console.log(formdata)

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
          <button type="submit" className="button is-fullwidth is-info">
            Register Me!
          </button>
        </div>
      </form>
    </div>


  )
}

export default Register
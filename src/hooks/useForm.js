import React from 'react'

export function useForm(initialFormdata) {
  const [formdata, setFormdata] = React.useState(initialFormdata)
  const [formErrors, setFormErrors] = React.useState(initialFormdata)

  const handleChange = event => {
    setFormdata({ ...formdata, [event.target.name]: event.target.value })
    setFormErrors({ ...formErrors, [event.target.name]: '' })
  }



  return {
    formdata,
    formErrors,
    handleChange,
    setFormErrors,
    setFormdata,
  }
}
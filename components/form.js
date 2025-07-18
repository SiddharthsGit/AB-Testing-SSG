// components/Form.js
import { useState } from 'react'
import Cookies from 'js-cookie'
import { useUser } from '../context/userContext'

const Form = () => {
  const { user, setUser } = useUser()

  const [name, setName] = useState(user.name || '')
  const [gender, setGender] = useState(user.gender || '')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Save to cookies
    Cookies.set('name', name)
    Cookies.set('gender', gender)

    // Keep existing variant from context
    const variant = Cookies.get('variant') || user.variant || 'A'
    Cookies.set('variant', variant)

    // Update context
    setUser({ name, gender, variant })
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label className="form-label">Your Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          required
        />
      </div>

      <div>
        <label className="form-label">Gender:</label>
        <div className="gender-options">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <span className="gender-label">Male</span>
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <span className="gender-label">Female</span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="submit-btn"
      >
        Submit
      </button>
    </form>
  )
}

export default Form

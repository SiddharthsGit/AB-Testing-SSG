import { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    gender: '',
    variant: '',
  })

  // Update user and cookies together
  const updateUser = (newUser) => {
    setUser(newUser)
    Cookies.set('name', newUser.name)
    Cookies.set('gender', newUser.gender)
    Cookies.set('variant', newUser.variant)
  }

  useEffect(() => {
    const name = Cookies.get('name') || ''
    const gender = Cookies.get('gender') || ''
    const variant = Cookies.get('variant') || ''
    setUser({ name, gender, variant })
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser: updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)



import React from 'react'
import { useUser } from '../context/userContext'
import styles from '../styles/Message.module.css'

const Message = () => {
  const { user } = useUser()
  const { name, gender } = user || {}

  if (!name || !gender) return null

  const colorClass = gender === 'male' ? styles.maleText : styles.femaleText

  return (
    <div className={`${styles.messageText} ${colorClass}`} style={{ background: '#fff9c4', padding: '1rem', borderRadius: '8px' }}>
      Hi {name}, you are a {gender}.
    </div>
  )
}

export default Message

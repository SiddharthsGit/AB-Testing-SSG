import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Form from '../components/form'
import Message from '../components/message'
import styles from '../styles/Message.module.css'

export default function Home() {
  const [variant, setVariant] = useState(null)

  useEffect(() => {
    let v = Cookies.get('variant')
    if (!v) {
      v = Math.random() < 0.5 ? 'A' : 'B'
      Cookies.set('variant', v)
    }
    setVariant(v)
  }, [])

  if (!variant) return null

  return (
    <div className={`${variant === 'A' ? styles.variantABg : styles.variantBBg} ${styles.mainContainer}`}>
      <h1 className={styles.mainTitle}>Variant {variant}</h1>
      <Form />
      <Message />
    </div>
  )
}

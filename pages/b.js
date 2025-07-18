// pages/b.js
import { parseCookies } from '../utils/cookieUtils'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import Form from '../components/form'
import Message from '../components/message'
import styles from '../styles/Message.module.css'

export async function getStaticProps() {
 
  return {
    props: {
      variant: 'B',
    },
  }
}

export default function VariantB({ variant }) {
  
  useEffect(() => {
    Cookies.set('variant', variant)
  }, [variant])

  return (
    <div className={`${styles.variantBBg} ${styles.mainContainer}`}>
      <h1 className={styles.mainTitle}>Variant B</h1>
      <Form />
      <Message />
    </div>
  )
}

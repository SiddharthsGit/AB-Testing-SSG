import Cookies from 'js-cookie'
import { useEffect } from 'react'
import Form from '../components/form'
import Message from '../components/message'
import styles from '../styles/Message.module.css'

export async function getStaticProps() {
  
  return {
    props: {
      variant: 'A',
    },
  }
}

export default function VariantA({ variant }) {
  
  useEffect(() => {
    Cookies.set('variant', variant)
  }, [variant])

  return (
    <div className={`${styles.variantABg} ${styles.mainContainer}`}>
      <h1 className={styles.mainTitle}>Variant A</h1>
      <Form />
      <Message />
    </div>
  )
}

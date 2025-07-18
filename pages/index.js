import { parseCookies } from '../utils/cookieUtils'

export async function getServerSideProps(context) {
  const cookies = parseCookies(context.req)
  let variant = cookies.variant

  // If no variant cookie, randomly assign A or B
  if (!variant) {
    variant = Math.random() < 0.5 ? 'A' : 'B'
  }

  return {
    redirect: {
      destination: `/${variant.toLowerCase()}`,
      permanent: false,
    },
  }
}

export default function Home() {
   return null
}

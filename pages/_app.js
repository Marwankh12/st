import Layout from '../Components/Layout'
import Navbar from '../Components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return (
  <>
  <Layout>
  <Component {...pageProps} />
  </Layout>
</>
  )
}

export default MyApp

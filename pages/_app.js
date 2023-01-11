import '../styles/globals.css'
import Layout from '../components/Layout'
import reportWebVitals from '../lib/reportWebVitals'
import { sendToVercelAnalytics } from '../lib/vitals'

function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
reportWebVitals(sendToVercelAnalytics)
export default MyApp

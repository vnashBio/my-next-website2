import Nav from '../components/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Nav/>
    <main className="container">
      <Component {...pageProps} />
    </main>
  </>
}

export default MyApp

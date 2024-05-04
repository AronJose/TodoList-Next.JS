import '../styles/globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import connectDB from '../lib/db';

export default function App({ Component, pageProps }) {
  connectDB()
  return (
    <>
      <Header />
      < Component {...pageProps} />
      <div className="container mx-auto min-h-5/6" />
      <Footer />
    </>
  )
}

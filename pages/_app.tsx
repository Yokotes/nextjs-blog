import Header from '../components/Header';
import '../styles/global.scss';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default App;
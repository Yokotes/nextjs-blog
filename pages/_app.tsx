import { Provider } from 'react-redux';
import Header from '../components/Header';
import store from '../store';
import '../styles/global.scss';

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}

export default App;
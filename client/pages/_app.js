import '../styles/global.scss';
import { Provider } from 'react-redux';
import { useStore } from '../state';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

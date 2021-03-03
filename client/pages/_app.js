import '../styles/global.scss';
import { Provider } from 'react-redux';
import { useStore } from '../state';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const Layout = Component.Layout || EmptyLayout;

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
const EmptyLayout = ({ children }) => <>{children}</>;

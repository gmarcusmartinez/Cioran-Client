import '../styles/global.scss';
import { Provider } from 'react-redux';
import { useStore } from '../state';
import buildClient from '../api/build-client';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  const store = useStore(pageProps.initialReduxState);
  const Layout = Component.Layout || EmptyLayout;

  return (
    <Provider store={store}>
      <Layout currentUser={currentUser}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};
const EmptyLayout = ({ children }) => <>{children}</>;

AppComponent.getInitialProps = async ({ Component, ctx }) => {
  // const client = buildClient(ctx);
  // const { data } = await client.get('/api/auth/currentuser');

  let pageProps = {};
  // if (Component.getInitialProps) {
  //   pageProps = await Component.getInitialProps(ctx);
  // }

  // return { pageProps, ...data };
  return { pageProps };
};

export default AppComponent;

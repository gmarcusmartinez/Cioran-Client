import "styles/main.global.scss";
import { Provider } from "react-redux";
import { useStore } from "store";
import buildClient from "api/build-client";

const AppComponent = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
  const Layout = Component.Layout || EmptyLayout;

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

AppComponent.getInitialProps = async ({ Component, ctx }) => {
  const client = buildClient(ctx);
  const { data } = await client.get("/api/auth/currentuser");

  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  };

  return {
    pageProps,
    //  data
  };
};

export default AppComponent;

function EmptyLayout({ children }) {
  return <>{children}</>;
}

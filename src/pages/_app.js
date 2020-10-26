import { wrapper } from "../store";
import { END } from "redux-saga";

// import buildClient from "api/build-client";
const EmptyLayout = ({ children }) => <>{children}</>;

const AppComponent = ({ Component, pageProps }) => {
  const Layout = Component.Layout || EmptyLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

AppComponent.getInitialProps = async ({ Component, ctx }) => {
  // const client = buildClient(appContext.ctx);
  // const { data } = await client.get("/api/auth/currentuser");

  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  };

  if (ctx.req) {
    ctx.store.dispatch(END);
    await ctx.store.sagaTask.toPromise();
  }
  return {
    pageProps,
    // ...data,
  };
};

export default wrapper.withRedux(AppComponent);

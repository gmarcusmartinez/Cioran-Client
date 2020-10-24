// import buildClient from "api/build-client";

const AppComponent = ({ Component, pageProps }) => {
  const Layout = Component.Layout || EmptyLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

const EmptyLayout = ({ children }) => <>{children}</>;
// AppComponent.getInitialProps = async (appContext) => {
//   const client = buildClient(appContext.ctx);
//   const { data } = await client.get("/api/auth/currentuser");

//   let pageProps = {};
//   if (appContext.Component.getInitialProps) {
//     pageProps = await appContext.Component.getInitialProps(appContext.ctx);
//   }
//   return {
//     pageProps,
//     ...data,
//   };
// };

export default AppComponent;

import "../styles/style.css";
import { useEffect } from "react";
// import tawkTo from "tawkto-react";
import { Provider } from "react-redux";
import { store } from "../apps/features/store";

import Layout from "../apps/core/Layout";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   const tawkToKey = "default";
  //   const tawkToPropertyId = "5e82496669e9320caabe9959";
  //   new tawkTo(tawkToPropertyId, tawkToKey);
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);

  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // );

  console.log("Component ::", Component.Layout);

  const AppLayout = Component.Layout || Layout;
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}

export default MyApp;

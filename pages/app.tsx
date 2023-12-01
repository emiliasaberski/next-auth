import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <p>Hi</p>
    // <SessionProvider session={pageProps.session}>
    //   <Component {...pageProps} />
    // </SessionProvider>
  );
};

export default App;
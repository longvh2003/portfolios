import Head from "next/head";
import { Provider } from "../Provider";
import "xterm/css/xterm.css";
import "@/styles/globals.css";
import "@/styles/calendar.css";
import "@/styles/markdown.css";
import "@/styles/open-book.css";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
};

function MyApp({ Component, pageProps }: Props) {
  return (
    <Provider>
      <Head>
        <title>Long Site</title>
        {/* <link
          rel="preload"
          href="https://blog.fakhrusy.com"
          as="document"
        ></link> */}
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

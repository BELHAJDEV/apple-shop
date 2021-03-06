import '../styles/globals.css';
import Head from 'next/head';
import Navbar from "../components/navbar/Navbar";
import { Context} from '.././Context';
import {initialState,reducer} from '.././Reducer';
import { useReducer } from 'react';
import { SessionProvider } from 'next-auth/react';


function MyApp({ Component, pageProps }) {

  const [state,dispatch] = useReducer(reducer, initialState);

  return (
    <SessionProvider session={pageProps.session}>
    <Context.Provider value={{
      value1 : [state,dispatch],    
    }}>
      <Head>
          <title>Apple</title>
          <meta name="description" content="Trying to shop from apple." />
          <link rel="icon" href="/images/apple-logo.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </Context.Provider>

    </SessionProvider>
  )
}

export default MyApp

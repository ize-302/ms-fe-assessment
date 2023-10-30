// pages/_app.js
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import AppProvider from "@/context/appContext";
import React from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;

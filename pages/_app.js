import "@/styles/globals.css";
import AppContextProvider from "@/store/form-context-provider";
export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />;
    </AppContextProvider>
  );
}

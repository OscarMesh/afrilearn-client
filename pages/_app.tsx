import Footer from "../components/Footer";
import Navabar from "../components/Navbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-[1300px] m-auto">
      <Navabar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

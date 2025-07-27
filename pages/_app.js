import "../styles/globals.css";
import Chatbot from "../components/Chatbot";
import CursorTrail from "@/components/CursorTrail";


function MyApp({ Component, pageProps }) {
  return (
    <>
    <CursorTrail />
      <Component {...pageProps} />
      <Chatbot /> {/* 🧠 MukthaBot available on every page */}
    </>
  );
}

export default MyApp;

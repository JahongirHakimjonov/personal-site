import {GoogleTagManager} from "@next/third-parties/google";
import {Inter} from "next/font/google";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import Head from "next/head";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Jahongir Hakimjonov",
    description:
        "Jahongir Hakimjonov is a Backend Developer, who loves to code and build something in everyday.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <Head>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <body className={inter.className}>
        <ToastContainer/>
        <main
            className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
            <Navbar/>
            {children}
            <ScrollToTop/>
        </main>
        <Footer/>
        </body>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM}/>
        </html>
    );
}

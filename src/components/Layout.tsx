import Head from "next/head";
import { useEffect, useRef } from "react";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  const navRef = useRef(null);
  useEffect(() => {
    function handleScroll(){
      if (window.scrollY > 10) {
        navRef.current.classList.add("active");
      } else {
        navRef.current.classList.remove("active");
      }
    }
    window.addEventListener('scroll', handleScroll);

    return (() => {
      window.removeEventListener('scroll', handleScroll);
    })
  })


  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <nav ref={navRef}>
        <Navigation />
      </nav>
      <main>{children}</main>
      <style jsx global>{`
        .flex-center {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}
      </style>
      <style jsx>
        {`
          .root {
            // display: block;
            // display: flex;
            // flex-direction: column;
          }
          nav {
            position: fixed;
            position: -webkit-sticky;
            top: 0; /* required */
            display: block;
            padding: 10px 0;
            background-color: #222;
            width: 100%;
            transition: all 800ms;
          }
          nav.active {
            background-color: #222;
          }
          main {
            // display: flex;
            // min-height: 100%;
          }
          @media (min-width: 769px) {
            nav {
              background-color: transparent;
            }
            .root {
              // display: flex;
              // flex: 1 0 auto;
              // flex-direction: row;
            }
            main {
              // flex: 1 0 auto;
            }
          }
        `}
      </style>
    </div>
  );
}

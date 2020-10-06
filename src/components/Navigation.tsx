import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useContext, useState } from "react";
import GitHub from "../assets/github-alt.svg";
import { LanguageContext } from "../LanguageProvider";
import { attributes } from "../../content/cat.md";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [locale, toggleLocale] = useContext(LanguageContext);

  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"container " + (active ? "active" : "")}>
        <div id="logo">
          <GitHub width={46} height={46} fill={"white"} />
        </div>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : null}>主页</a>
            </Link>
          </li>
          <li>
            <Link href="/contactus">
              <a className={router.pathname === "/contactus" ? "active" : null}>关于我们</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a
                className={
                  router.pathname.startsWith("/posts") ? "active" : null
                }
              >
                blog
              </a>
            </Link>
          </li>
          <li>
              <button className={"lang-switch" + (locale === 'cn'? " active" : "")} onClick={toggleLocale}><span>中文</span></button>
              <span style={{color: "white"}}> | </span>
              <button className={"lang-switch" + (locale === 'en'? " active" : "")} onClick={toggleLocale}><span>en</span></button>
          </li>
        </ul>
        <style jsx>{`
            a {
              color: white;
            }
            .container {
              position: sticky;
              display: flex;
              flex-direction: row;
              transition: all 800ms;
            }
            .lang-switch {
              transition-duration: 0.4s;
              background-color: transparent;
              color: #9b9b9b;
              border-width: 0;
              outline: 0;
            }
            .lang-switch.active {
              color: white;
            }
            .lang-switch:hover {
              color: white;
            }
            ul {
              margin:0;
              padding:0;
              width: 100%;
              opacity: 0.8;
              height: 100vh;
              text-align: right;
              list-style: none;
              position: fixed;
              display: flex;
              flex-direction: column;
              justify-content: center;
              z-index: 1;
              transition: opacity 400ms;
              transform: translateY(100%);
              background-color: #222; 
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
            }
            li {
              margin-bottom: 1.75rem;
              font-size: 1.3rem;
              padding: 0 1.5rem 0 0;
            }
            .active {
              color: white;
            }
            #logo {
              margin: 0 20px;
              display: none;
            }
            @media (min-width: 769px) {
              ul {
                display: flex;
                flex-direction: row;
                align-items: center;
                position: static;
                opacity: 1;
                height: auto;
                text-align: left;
                transform: translateY(0);
                background-color: transparent;
              }
              #logo {
                position: static;
                display: block;
                margin-left: 5rem;
              }
              li {
                display:inline;
                display:inline-block;
                margin-bottom: 0;
              }
            }
          `}</style>
      
      </div>
    </>
  );
}
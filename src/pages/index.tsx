import Head from "next/head";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import home from "../../content/home.md";

export default function Index({ data }) {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="top-container">
        <div className="overlay">
          <div className="top-banner flex-center">
            <div id="company-info">
              <div>
                <h2>
                  {data.subTitle}
                </h2>
                <h1>
                  {data.title}
                </h1>
              </div>
              <div>
                <div id="contact-info" className="flex-center">
                  <div>
                    <img id="qrcode" src={"/images/qrcode.svg"}/>
                  </div>
                  <div className="contact-box">
                    <div className="contact-box" id="gmail-box">
                      <a href={"mailTo:+" + data.email} >{data.email}</a>
                    </div>
                    <div className="contact-box">
                      <a href={"tel:" + data.tel}>{data.tel}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <h2 className="mb-1">
            Some Description here<span className="fancy">.</span>
          </h2>
          <div>
            <img height="300" width="50%" src={"https://picsum.photos//id/1060/536/354?blur=2"} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .top-container {
          height: 90vh;
          background-image: url(/images/cover.jpg);
          background-repeat: no-repeat;
          background-size: container;
          background-position: center;
        }
        .overlay {
          background: rgba(56, 56, 56, 0.5);
          min-height: 100%;
          height: 100%;
          padding: 0 5px;
        }
        .top-banner {
          width: 100%;
          height: 100%;
        }
        #company-info {
          margin-top: -10px;
        }
        #qrcode {
          width: 10rem;
          height: auto;
          justify-content: center;
        }
        #contact-info {
          flex-direction: column;
        }
        #gmail-box {
          border-width: 1px;
          border-color: white;
          border-style: solid;
          color: white;
          width: fit-content;
          height: fit-content;
          margin: 10px;
          padding: 10px;
          border-radius: 5px;
        }
        .contact-box {
          text-align: center
        }
        .contact-box a {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
        }
        .container {
          //flex: 1 1 auto;
          padding: 5rem;
          height: 90vh;
        }
        .top-container h1 {
          font-size: 2.5rem;
          text-align: center;
          margin: 0;
          font-weight: 500;
          color: white;
          margin-bottom: 0.5rem;
        }
        .top-container h2 {
          text-align: center;
          font-size: 1.75rem;
          font-weight: 400;
          margin-bottom: 0.5rem;
        }
        .container h1,
        .container h2{
          color: black;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          .top-container {
            background-image: url(/images/cover.jpg);
            background-size: cover;
          }
          #contact-info {
            flex-direction: row;
          }
          .top-banner {
            width: 70%;
          }
          .top-container h1 {
            text-align: left;
            font-size: 6rem;
          }
          .top-container h2 {
            text-align: left;
            font-size: 2.25rem;
          }
        }
      `}</style>
    
    </Layout>
  );
}

export async function getStaticProps(content) {
  const data = await home.attributes;
  return {
      props:{
          data
      }
  }
}
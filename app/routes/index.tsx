import type { LinksFunction } from "@remix-run/node";

import styles from "~/styles/home/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function Index() {
  return (
    <section className="home">
      <div className="home-content hero is-fullheight">
        <div className="home-container">
          <div className="home-container-who">
            <h1>Hi <br /> I'm Cristian <br /> Web Developer</h1>
            <p>Full Stack Developer / Javascript Lover </p>
          </div>
          <div className="home-container-image">
            <svg
              className="cube"
              viewBox="0 0 300 230"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <g id="cube" className="cube-unit">
                  <rect
                    width="21"
                    height="24"
                    fill="#01f8c1"
                    stroke="#0079ad"
                    transform="skewY(30)"
                  />
                  <rect
                    width="21"
                    height="24"
                    fill="#008bc7"
                    stroke="#0079ad"
                    transform="skewY(-30) translate(21 24.3)"
                  />
                  <rect
                    width="21"
                    height="21"
                    fill="#01f8c1"
                    stroke="#0079ad"
                    transform="scale(1.41,.81) rotate(45) translate(0 -21)"
                  />
                </g>
              </defs>
              <use xlinkHref="#cube" x="121" y="112" />
              <use xlinkHref="#cube" x="100" y="124" />
              <use xlinkHref="#cube" x="142" y="124" />
              <use className="m-down" xlinkHref="#cube" x="121" y="136" />
              <use xlinkHref="#cube" x="79" y="136" />
              <use xlinkHref="#cube" x="163" y="136" />
              <use xlinkHref="#cube" x="142" y="148" />
              <use xlinkHref="#cube" x="100" y="148" />
              <use xlinkHref="#cube" x="121" y="160" />

              <use xlinkHref="#cube" x="121" y="88" />
              <use className="m-left" xlinkHref="#cube" x="100" y="100" />
              <use className="m-right" xlinkHref="#cube" x="142" y="100" />
              <use xlinkHref="#cube" x="121" y="112" />
              <use xlinkHref="#cube" x="79" y="112" />
              <use xlinkHref="#cube" x="163" y="112" />

              <use className="m-right" xlinkHref="#cube" x="142" y="124" />
              <use className="m-left" xlinkHref="#cube" x="100" y="124" />
              <use xlinkHref="#cube" x="121" y="136" />
              <use xlinkHref="#cube" x="121" y="64" />
              <use xlinkHref="#cube" x="100" y="76" />
              <use xlinkHref="#cube" x="142" y="76" />

              <use className="m-up" xlinkHref="#cube" x="121" y="88" />
              <use xlinkHref="#cube" x="79" y="88" />
              <use xlinkHref="#cube" x="163" y="88" />
              <use xlinkHref="#cube" x="142" y="100" />
              <use xlinkHref="#cube" x="100" y="100" />
              <use xlinkHref="#cube" x="121" y="112" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { LinksFunction, MetaFunction } from "@remix-run/node";

import styles from "~/styles/pages/about/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => {
  return {
    title: "About me",
    description:
      "I been working a lot with javascript technologies",
  };
};

export default function About() {
  return (
    <section className="about">
      <div className="about-content hero is-fullheight">
        <div className="about-container">
          <div className="about-container-who">
            <div className="about-container-who-profile">
              <div className="profile">
                <div className="about-container-who-profile-face">
                  <img src="me.webp" alt="" width={400} height={400} />
                </div>
                <div className="share-media">
                  <a
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/cristian-andres-arrieta-gutierrez-74a496b5"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    rel="noreferrer"
                    href="https://github.com/Darktowers"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github" />
                  </a>
                </div>
              </div>
              <div className="about-container-who-profile-content">
                <h1>Cristian Arrieta</h1>
                <h3>
                  Frontend Developer / Javascript Lover{" "}
                  <i className="fa-solid fa-heart" />
                </h3>
                <p>
                  Software developer with more than +6 years of experience in
                  web apps development. I'm a team player and I'm always
                  learning about new technologies and constantly improving my
                  skills in order to do my best in each project I'm part.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

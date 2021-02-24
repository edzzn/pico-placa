import * as React from "react";
import {
  PageContainer,
  AboutContainer,
  SpotifyPlayerContainer,
} from "./styles";
import SpotifyPlayer from "react-spotify-player";

class About extends React.Component<{}, {}> {
  render() {
    return (
      <PageContainer>
        <AboutContainer>
          <h1>Pico y Placa</h1>
          <br />
          <p>
            Este sitio es una prueba para concursar por el puesto de
            Desarrollador/a de Software en <em>StackBuilders.</em>
          </p>
          <br />
          <p>
            Este sitio se contruyó utilizando:
            <ul>
              <li>Reactjs</li>
              <li>TypeScript</li>
              <li>StyledComponents</li>
              <li>2 tasas de café ☕☕</li>
              <li>La playlist adjunta 🎧</li>
            </ul>
          </p>
          <SpotifyPlayerContainer>
            <SpotifyPlayer
              uri="spotify:playlist:37i9dQZF1E8SeU0KL2fnOk"
              size={{
                width: "100%",
                height: 350,
              }}
              view={"list"}
              theme={"black"}
            />
          </SpotifyPlayerContainer>
          <br />
          <p>
            Es posible obtener más información en el siguiente enlace:{" "}
            <a
              href="https://github.com/edzzn/pico-placa"
              rel="noreferrer"
              target="_blank"
            >
              github.com/edzzn/pico-placa
            </a>
          </p>
        </AboutContainer>
      </PageContainer>
    );
  }
}

export default About;

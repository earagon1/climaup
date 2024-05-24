import React from 'react';
import '../styles/background.css';
import Container from'./container';
import WeatherCard from './weatherCard';

const background = () => {
  return (
    <div className="split-background">
      <div className="top-section">
        <img src="logo.png" className="centered-logo"/>
      </div>
      <div className="bottom-section">
    <h1 id="acerca-de">ACERCA DE:</h1>
    <Container>
      <p><b>ClimaUP</b> es una aplicación que permite consultar el clima de tu ciudad favorita.</p>
    </Container>
    <h1 id="tecnologias">TECNOLOGIAS:</h1>
    <Container>
      <p>En esta aplicacion se utilizo React js, Bootstrap v5 y CSS3.</p>
    </Container>
    <h1 id="funcionalidad">FUNCIONALIDAD:</h1> 
    <Container>
      <p>A continuacion se encontrara un boton selector que permitira elegir una ciudad y traera una tarjeta con informacion del clima y la hora en el momento de la ciudad elegida.</p> 
    </Container>
    <h1 id="consultar">CONSULTAR:</h1> 
        <WeatherCard/>
      </div>
      <footer className="footer">
        <p>© 2024 ClimaUP. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default background;

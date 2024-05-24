import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import '../styles/selector.css';
import { Card, Button } from 'react-bootstrap';

function WeatherCard() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

/*Mapeo de las imágenes según las condiciones del clima*/
  const imagenesMap = {
    "Partly cloudy": "https://firebasestorage.googleapis.com/v0/b/skyscan-d7ce5.appspot.com/o/nublado.jpg?alt=media&token=548c0724-8861-4acb-a7d2-62850d442652",
    "Partly Cloudy": "https://firebasestorage.googleapis.com/v0/b/skyscan-d7ce5.appspot.com/o/nublado.jpg?alt=media&token=548c0724-8861-4acb-a7d2-62850d442652",
    "Sunny": "https://firebasestorage.googleapis.com/v0/b/skyscan-d7ce5.appspot.com/o/Blue%20sky.jpeg?alt=media&token=cf464913-c595-4cb2-b0ec-d7975a6cb6dc",
    "Light rain": "https://firebasestorage.googleapis.com/v0/b/skyscan-d7ce5.appspot.com/o/Lluvia.gif?alt=media&token=7358643c-61c2-4845-8a43-111b4b5e68ce"
  };

/*se hace la llamada para trer las ciudades para el selector*/
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const paisesRef = collection(db, "Paises");
        const querySnapshot = await getDocs(paisesRef);
        const citiesList = querySnapshot.docs.map(doc => doc.data().capital).sort((a, b) => a.localeCompare(b));
        setCities(citiesList);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching cities:", err);
      }
    };

    fetchCities();
  }, []);

/*esta funcion hace llamada a la api y se le pasa como parametro el nombre de una ciudad*/
  const fetchData = async (city) => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=0ec52c73865a457987f182557242405&q=${city}&aqi=yes`);
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching weather data:", err);
    }
  };

/**
 * esta funcion se utiliza cuando se elige la ciudad en el boton selector
 * guarda el nombre de la ciudad 
 * y llama a la funcion fetchdata para hacer la llamada a la api con el nombre de la ciudad elegida
 **/
const handleCityChange = async (e) => {
  try {
    const city = e.target.value;
    setSelectedCity(city);
    await fetchData(city); 
  } catch (error) {
    console.error("Error getting weather:", error);
  }
};

/*esta funcion se usa para el boton actualizar el contenido de la card*/
  const handleUpdateWeather = async () => {
    try {
      await fetchData(selectedCity);
    } catch (error) {
      console.error("Error updating weather:", error);
    }
  };
  
  return (
    <div className="weather-card">
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="d-flex flex-column align-items-center">
          <div className="selectors-container mb-3">
            <select className="form-select" aria-label="Default select example" onChange={handleCityChange}>
              <option value="" disabled selected>Selecciona una ciudad</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
          </div>
          
          {weatherData && (
            <div className="col-md-4">
              <Card className="mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <Card.Img src={imagenesMap[weatherData.current.condition.text]} className="img-fluid rounded-start w-150 h-100" />
                  </div>
                  <div className="col-md-8">
                    <Card.Body>
                      <Card.Title>{weatherData.location.name}</Card.Title>
                      <Card.Text>
                        Fecha: {weatherData.location.localtime.split(' ')[0]}
                        <br />
                        Hora: {weatherData.location.localtime.split(' ')[1]}
                        <br />
                        Temperatura: {weatherData.current.temp_c}°C
                        <br />
                        Condición: {weatherData.current.condition.text}
                        <br />
                        Humedad: {weatherData.current.humidity}%
                        <br />
                        Viento: {weatherData.current.wind_kph} kph
                      </Card.Text>
                      <Button onClick={handleUpdateWeather} variant="primary">Actualizar</Button>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WeatherCard;

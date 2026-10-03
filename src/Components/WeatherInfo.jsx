import { useEffect, useState } from "react";
import Search from "./Search";
import "./WeatherInfo.css";

function WeatherInfo() {
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(city) {
    setLoader(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bdcf5e07ee1b7bf68d85acfe1c19295a`,
      );

      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLoader(false);
      }
    } catch (e) {
      setLoader(false);
      console.log(e);
    }
  }

  useEffect(() => {
    fetchWeatherData("Lahore");
  }, []);

  const currentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleSearch = () => {
    fetchWeatherData(search);
  };

  return (
    <div className="card-container">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loader ? (
        <div>Loading...</div>
      ) : (
        <div className="weather-info">
          <h1>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h1>
          <h3>{currentDate()}</h3>
          <h2>{weatherData?.main?.temp}°C</h2>
          <div>
            <p className="weather-description">
                {weatherData?.weather[0]?.description}
            </p>
          </div>
          <div className="data">
            <div>
              <p>{weatherData?.main?.humidity}</p>
              <p>Humidity</p>
            </div>
            <div>
              <p>{weatherData?.wind?.speed}</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherInfo;

import { useState } from "react";
import "./App.css";
import NoCity from "./components/NoCity";

function App() {
  const [city, setCity] = useState("");
  const [cityTempData, setCityTempData] = useState({});
  const [noCity, setNoCity] = useState(false);

  const cities = [
    { id: 1, name: "Berlin", temp: 25, desc: " Bewölkt - Regenwahrscheinlichkeit" },
    { id: 2, name: "Köln", temp: 23, desc: " Bedeckt- Regen" },
    { id: 3, name: "Heilbronn", temp: 18, desc: "Sonnig " },
    { id: 4, name: "Frankfurt", temp: 21, desc: "Windig " },
    { id: 5, name: "Hamburg", temp: 9, desc: " Schneefall" },
  ];

  const showTempHandler = () => {
    const cityTemp = cities.find((item) => item.name === city);

    if (cityTemp) {
      setCityTempData(cityTemp);
      setNoCity(false);
    } else {
      setCityTempData(null);
      setNoCity(true);
    }
  };

  return (
    <>
      <article id="weather-card">
        <header className="" id="weather-card.header">
          <div id="city-name">
            Deutschland {cityTempData?.name ? cityTempData?.name : cities[0].name}
          </div>
          <div className="temp-parent">
            <span id="symbol"> C </span>
            <span id="temperature">
              {" "}
              {cityTempData?.temp ? cityTempData?.temp : cities[0].temp}{" "}
            </span>
          </div>
          <div id="desc">
            {cityTempData?.desc ? cityTempData?.desc : cities[0].desc}
          </div>
          <div id="search-field">
            <input
              value={city}
              onChange={(event) => setCity(event.target.value)}
              type="text"
              placeholder="Geben Sie Ihren Wohnort ein  "
              id="search-input"
              className="w-full h-10 bg-black"
            />
            <button id="search-btn" onClick={showTempHandler}>
              Search
            </button>
          </div>
        </header>
        <main>
          <div id="in-hours">
            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="./public/image/sunny.png" />
              <p className="hour-temp">16C</p>
            </article>
            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="./public/image/rainy.png" />
              <p className="hour-temp">18C</p>
            </article>
            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="./public/image/sunny.png" />
              <p className="hour-temp">14C</p>
            </article>
            <article className="hourly-card">
              <p className="hour">16:00</p>
              <img src="./public/image/sunny.png" />
              <p className="hour-temp">19C</p>
            </article>
          </div>
        </main>
        <footer id="daily-section">
          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/image/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>
          <article className="daily-card">
            <p className="daily-date">03/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/image/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>
          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/image/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>
          <article className="daily-card">
            <p className="daily-date">07/12</p>
            <p className="dayly-day">TUE</p>
            <img src="./public/image/rainy.png" alt="Weather" />
            <p className="daily-temp">32C</p>
          </article>
        </footer>
      </article>

      {noCity && (
        <NoCity
          onClose={() => {
            setNoCity(false);
            setCity("");
          }}
        />
      )}
    </>
  );
}

export default App;

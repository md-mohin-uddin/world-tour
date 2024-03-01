import { useState } from "react";
import "./Country.css";
import CountryDetail from "./CountryDetails/CountryDetail";
const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const { name, capital, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  console.log(handleVisitedFlag);
  return (
    <div className={`country ${visited ? "visited" : "nonVisited"}`}>
      <h3>Country:{name.common}</h3>
      <p>Capital: {capital}</p>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountries(country)}>
        Mark Visited
      </button>
      <button onClick={() => handleVisitedFlag(country.flags.png)}>Flag</button>

      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      <br />
      {visited ? "I have visited this country" : "I want to visit"}

      <hr />
      <CountryDetail
        country={country}
        handleVisitedCountries={handleVisitedCountries}
        handleVisitedFlag={handleVisitedFlag}
      />
    </div>
  );
};

export default Country;

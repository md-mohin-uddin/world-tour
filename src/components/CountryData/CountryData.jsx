const CountryData = ({
  country,
  handleVisitedCountries,
  handleVisitedFlag,
}) => {
  return (
    <div>
      <p>
        <small>Country Data: {country.name.common}</small>
      </p>
    </div>
  );
};

export default CountryData;

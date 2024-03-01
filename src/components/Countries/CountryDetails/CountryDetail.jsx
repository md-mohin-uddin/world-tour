import CountryData from "../../CountryData/CountryData";

const CountryDetail = (props) => {
  const { country, handleVisitedCountries, handleVisitedFlag } = props;
  return (
    <div>
      <h4>Country Details</h4>
      {/* <CountryData
        country={country}
        handleVisitedCountries={handleVisitedCountries}
        handleVisitedFlag={handleVisitedFlag}
      /> */}
      <CountryData {...props} />
    </div>
  );
};

export default CountryDetail;

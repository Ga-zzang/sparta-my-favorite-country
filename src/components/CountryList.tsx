import { useEffect, useState } from "react";
import { fetchData } from "../api/api";
import { Country } from "../types/Country";
import CountryCard from "./CountryCard";

function CountryList() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchData();
      setCountries(data);
    };
    getCountries();
  }, []);

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountries: Country) =>
          selectedCountries.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(
        selectedCountries.filter(
          (selectedCountry: Country) =>
            selectedCountry.name.common !== country.name.common
        )
      );
    }
  };
  return (
    <>
      <h1 className="text-2xl text-center font-bold mt-12">
        Favorite Countries
      </h1>
      <div className="grid grid-cols-4 gap-6 place-items-center">
        {selectedCountries.map((country: Country) => {
          return (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelectCountry={handleSelectCountry}
            />
          );
        })}
      </div>
      <h1 className="text-2xl text-center font-bold mt-12">Countries</h1>
      <div className="grid grid-cols-4 gap-6 grid place-items-center">
        {countries.map((country: Country) => {
          return (
            <CountryCard
              key={country.name.common}
              country={country}
              handleSelectCountry={handleSelectCountry}
            />
          );
        })}
      </div>
    </>
  );
}

export default CountryList;

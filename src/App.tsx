import { useEffect, useState } from "react";
import "./App.css";
import { fetchData } from "./api/api";
import { Country } from "./types/Country";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchData();
      setCountries(data);
    };
    getCountries();
  }, []);

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.cca2}>
          <img className="w-80" src={country.flags.png} />
          <h2 className="font-semibold text-[20px]">{country.name.common}</h2>
          <p>{country.capital}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;

import { Country } from "../types/Country";

interface CountryCardProps {
  country: Country;
  handleSelectCountry: (Country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelectCountry,
}) => {
  return (
    <div className="m-5 bg-slate-200">
      <div
        className="border-2 border-gray-400"
        onClick={() => handleSelectCountry(country)}
      >
        <img className="w-60 h-36" src={country.flags.png} />
        <h3 className="font-semibold text-[20px]">{country.name.common}</h3>
        <p>{country.capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;

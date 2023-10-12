import { useState, useEffect } from "react";
import * as homeServices from "../services/home.services";
import { Colombia } from "../interface/home.interface";

const Home = () => {
  const [colombia, setColombia] = useState({} as Colombia);

  const getInformationColombia = async () => {
    try {
      const { data } = await homeServices.getInformationColombia();
      setColombia(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInformationColombia();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-500 mb-2">
        Welcome to {colombia.name}!!
      </h1>
      <div className="flex flex-col items-center">
        <img
          src={colombia.flags?.[0]}
          alt={colombia.name}
          className="h-56 w-h-56"
        />
        <div className="m-3 space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">
            Country Information
          </h2>
          <p>
            <strong>Capital:</strong> {colombia.stateCapital}
          </p>
          <p>
            <strong>Surface Area:</strong> {colombia.surface} square kilometers
          </p>
          <p>
            <strong>Population:</strong> {colombia.population}
          </p>
          <p>
            <strong>Languages:</strong> {colombia.languages?.join(", ")}
          </p>
          <p>
            <strong>Time Zone:</strong> {colombia.timeZone}
          </p>
          <p>
            <strong>Currency:</strong> {colombia.currency} (
            {colombia.currencyCode})
          </p>
          <p>
            <strong>ISO Code:</strong> {colombia.isoCode}
          </p>
          <p>
            <strong>Internet Domain:</strong> {colombia.internetDomain}
          </p>
          <p>
            <strong>Phone Prefix:</strong> {colombia.phonePrefix}
          </p>
          <p>
            <strong>Radio Prefix:</strong> {colombia.radioPrefix}
          </p>
          <p>
            <strong>Aircraft Prefix:</strong> {colombia.aircraftPrefix}
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">Geography</h2>
          <p>
            <strong>Region:</strong> {colombia.region}
          </p>
          <p>
            <strong>Subregion:</strong> {colombia.subRegion}
          </p>
          <p>
            <strong>Borders:</strong> {colombia.borders?.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

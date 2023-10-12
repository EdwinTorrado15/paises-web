import { useState, useEffect } from "react";
import { Region } from "../interfaces/regions.interface";
import { Link } from "react-router-dom";
import * as regionsServices from "../services/regions.services";
import { Button } from "@nextui-org/react";

const Regions = () => {
  const [regions, setRegions] = useState<Region[]>([]);

  const getRegions = async () => {
    try {
      const { data } = await regionsServices.getRegions();
      setRegions(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRegions();
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-4">
        <Link to="/">
          <Button color="primary">Back</Button>
        </Link>
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Regions
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {regions.map((region) => (
          <div
            key={region.id}
            className="border border-gray-400 hover:bg-slate-50 transition-all duration-300 ease-in-out rounded-md p-4 cursor-pointer text-center"
          >
            <h2 className="text-xl font-bold text-center text-gray-800">
              {region.name}
            </h2>
            <p className="text-center text-gray-500">{region.description}</p>
            <Link to={`/regions/departments/${region.id}`}>
              <Button color="primary" className="mt-2">
                Show departments
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Regions;

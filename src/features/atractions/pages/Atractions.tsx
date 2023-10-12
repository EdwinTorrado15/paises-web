import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Atraction } from "../interface/atractions.interface";
import { Link } from "react-router-dom";
import * as atractionsServices from "../services/atractions.services";
import { Button } from "@nextui-org/react";

const Atractions = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const [atractions, setAtractions] = useState<Atraction[]>([]);

  const getAtractions = async () => {
    try {
      const { data } = await atractionsServices.getCities(id);
      setAtractions(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAtractions();
  }, [id]);
  return (
    <div className="p-4">
      <div className="flex items-center justify-center gap-4">
        <Link to="/regions">
          <Button color="primary">Back</Button>
        </Link>
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Atrractions
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {atractions.map((atraction) => (
          <div
            key={atraction.id}
            className="border border-gray-400 hover:bg-slate-50 transition-all duration-300 ease-in-out rounded-md p-4 cursor-pointer text-center"
          >
            <h2 className="text-xl font-bold text-center text-gray-800">
              {atraction.name}
            </h2>
            <div className="flex items-center justify-center gap-2">
              <p className="font-bold">City: </p>
              <p>{atraction.city.name}</p>
            </div>
            <p className="text-center text-gray-500">{atraction.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Atractions;

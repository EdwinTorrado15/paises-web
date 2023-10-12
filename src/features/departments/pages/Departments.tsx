import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Region } from "../interface/departments.interface";
import { Link } from "react-router-dom";
import * as departmentsServices from "../services/departments.services";
import { Button } from "@nextui-org/react";

const Departments = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const [departments, setDepartments] = useState({} as Region);

  const getDeparmentsByRegions = async () => {
    try {
      const { data } = await departmentsServices.getDepartments(id);
      setDepartments(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDeparmentsByRegions();
  }, [id]);
  return (
    <div className="p-4">
      <div className="flex items-center justify-center gap-4 mb-2">
        <Link to="/regions">
          <Button color="primary">Back</Button>
        </Link>
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Departments by {departments.name}
        </h1>
      </div>
      <p>{departments.description}</p>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {departments.departments?.map((deparment) => (
          <div
            key={deparment.id}
            className="border border-gray-400 hover:bg-slate-50 transition-all duration-300 ease-in-out rounded-md p-4 cursor-pointer text-center"
          >
            <h2 className="text-xl font-bold text-center text-gray-800">
              {deparment.name}
            </h2>
            <p className="text-center text-gray-500">{deparment.description}</p>
            <Link to={`/regions/departments/cities/${deparment.id}`}>
              <Button color="primary" className="mt-2">
                Show cities by department
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;

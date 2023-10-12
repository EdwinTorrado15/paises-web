import { Home } from "./features/home/page";
import { Regions } from "./features/regions/pages";
import { Departments } from "./features/departments/pages";
import { Atractions } from "./features/atractions/pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/regions/departments/:id" element={<Departments />} />
        <Route
          path="/regions/departments/cities/:id"
          element={<Atractions />}
        />
      </Routes>
    </div>
  );
};

export default App;

import { apiPaises } from "../../../api/api";

export const getInformationColombia = async () => {
  return await apiPaises.get("/Country/Colombia");
};

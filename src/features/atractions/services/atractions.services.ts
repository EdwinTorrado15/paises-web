import { apiPaises } from "../../../api/api";

export const getCities = async (id: string | undefined) => {
  return await apiPaises.get(`/Department/${id}/touristicattractions`);
};

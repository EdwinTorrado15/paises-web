import { apiPaises } from "../../../api/api";

export const getDepartments = async (id: string | undefined) => {
  return await apiPaises.get(`/Region/${id}/departments`);
};

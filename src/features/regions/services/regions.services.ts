import { apiPaises } from "../../../api/api";

export const getRegions = async () => {
  return await apiPaises.get("/Region");
};

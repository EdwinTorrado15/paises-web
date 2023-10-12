import axios from "axios";

export const apiPaises = axios.create({
  baseURL: "https://api-colombia.com/api/v1",
});

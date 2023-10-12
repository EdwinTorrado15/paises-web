export interface Region {
  id: number;
  name: string;
  description: string;
  departments: Department[];
}

interface Department {
  id: number;
  name: string;
  description: string;
  cityCapitalId: number;
  municipalities: number;
  surface: number;
  population: number;
  phonePrefix: string;
  countryId: number;
  cityCapital: any;
  country: any;
  cities: any;
  regionId: number;
  region: any;
  naturalAreas: any;
  maps: any;
}

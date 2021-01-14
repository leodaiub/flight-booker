/* --- STATE --- */
export interface FlightSearchState {
  countries: Country[];
  loading: boolean;
  error: any;
}

export type Country = {
  name: string;
  alpha2Code: string;
};
export type ContainerState = FlightSearchState;

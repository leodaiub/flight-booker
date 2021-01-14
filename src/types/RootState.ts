import { FlightSearchState } from 'app/containers/FlightSearch/types';
import { FormState } from 'app/containers/Form/types';
import { ThemeState } from 'theme/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  form?: FormState;
  flightSearch?: FlightSearchState;
  theme?: ThemeState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}

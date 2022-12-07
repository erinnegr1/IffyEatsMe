import axios from "axios";
import { YELP_API_KEY } from '@env';

console.log(YELP_API_KEY)
export default axios.create({
  
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 4DMCI7Y0f9u0QWz6SNGKhbCMrYBL31KqfODNnfByMtHdVnV5kn7OPq6ZT3eDrpkQSTYGURMtqH-ySFv3pXPD2wVXEi_5vDLMNACIUQLvs-VcFsuUEvJ3jJaIAPmPY3Yx"
  },
});
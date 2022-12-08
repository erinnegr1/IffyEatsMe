import axios from "axios";
import { YELP_API_KEY } from '@env';


export default axios.create({
  
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
    'REGXei6cQKCr2QZdDY9mBJowNOBjXd9MfcczMAdXPkE_h8HzjWxqh2s_8xWoOsb97xeXSulUkBRGk8S6nXo1UlzIX-gLulJbl3V6H1JAFrCeWJW19fDxIJBY4xaRY3Yx'
    
  },
});
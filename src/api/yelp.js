import axios from "axios";
import { YELP_API_KEY } from '@env';

console.log(YELP_API_KEY)
export default axios.create({
  
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
    'XhFvgP90N9Mv4kImYtncCY2c1_tgLf2a7zJiUKCVKXKC4r6MMBFQJo5c1FR0VGyKtm48i9lVhcIMsJjQZVCh6EmcmOLshYS-m_chka40v65bC0chDjreq1Zr63GOY3Yx'
  },
});
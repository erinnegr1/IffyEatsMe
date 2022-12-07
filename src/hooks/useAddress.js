import { useEffect, useState } from "react";
import yelp from "../api/yelp";
import * as Location from 'expo-location';



export default () => {
    const [userAddress, setUserAddress] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchAddress => {
        console.log('yo');
        console.log('searchapi', searchAddress)
        try {
            const response = await yelp.get('/search', {
                params: {
                    location: searchAddress,
                    term: "restaurant",
                    radius: 8000,
                    limit: 10,
                    
                    
                },
              
            });
            setRestaurants(response.data.businesses);
            console.log('searchApi',response.data.businesses)
            ///// Build in an else statement here that takes in the latitude and longitude as params

        } catch (err) {
            setErrorMessage('error in search API hook component')

        }
        };

        useEffect(() => {
            searchApi("NYC");
        }, []);

    return [searchApi, restaurants, errorMessage]
       
    }; 


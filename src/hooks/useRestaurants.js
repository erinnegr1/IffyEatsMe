import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [restaurants, setRestaurants]= useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchAddress => {
        console.log('yo');
        console.log('searchapi', searchAddress)
        try {
            const response = await yelp.get('/search', {
                params: {
                    location: searchAddress,
                }
            });
            setRestaurants(response.data.business);
        } catch (err) {
            setErrorMessage('error in search API hook component')

        }
        };

        useEffect(() => {
            searchApi("NYC");
        }, []);

        return [searchApi, restaurants, errorMessage]
    };

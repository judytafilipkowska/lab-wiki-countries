import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import countriesJSON from './../countries.json';
import axios from 'axios';

function CountriesList() {

    const [countries, setCountries] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://ih-countries-api.herokuapp.com/countries')
            setCountries(response.data)
        };
        fetchData();
    }, [])

    return (
        <div>
            <div className="col-5" style={{ maxHeight: "600px", overflow: "scroll" }} >
                {
                    countries.map((country) => {
                        return (
                            <Link key={country.alpha3code} to={'/' + country.alpha3code}>
                                <img src={`http://www.geognos.com/api/en/countries/flag/${country.alpha2Code}.png`} alt="flag" />
                                <h2>{country.name.official}</h2>
                            </Link>
                        )
                    })
                };
            </div>
        </div>
    );
}

export default CountriesList;
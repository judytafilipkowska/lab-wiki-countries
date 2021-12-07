import countriesJSON from './../countries.json'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function CountryDetails() {

    const [foundCountry, setFoundCountry] = useState([]);

    const { countryId } = useParams(); //alpha3Code

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://ih-countries-api.herokuapp.com/countries/' + countryId);

            setFoundCountry(response.data);
        };

        fetchData();
    }, [countryId]);

    return (
        <>
            <div class="col-7">
                <img src={`http://www.geognos.com/api/en/countries/flag/${foundCountry.alpha2Code}.png`}
                    alt="country flag" style={{ width: "300px" }} />
                <h1>{foundCountry.name.official}</h1>
                <table class="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "30%" }}>Capital</td>
                            <td>{foundCountry.capital[0]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>)

}

export default CountryDetails;
import React from 'react';
import {CountryDetail} from "../../models/api.model"
import {Typography} from "@mui/material";
interface CountryDetailProps {
    country: CountryDetail;
}

const CountryDetailComponent: React.FC<CountryDetailProps> = ({ country }) => {
    return (
        <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="w-80">
                <img className="border-2" src={country.flags.svg} alt={`Flag of ${country.name.common}`}/>
            </div>
            <div>
                <Typography variant="h3" component="h2">
                    {country.name.common}
                </Typography>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
                <p>Subregion: {country.subregion}</p>
                <p>Languages: {Object.values(country.languages)}</p>
                <p>Borders: {country.borders}</p>
            </div>
        </div>
    );
};

export default CountryDetailComponent;

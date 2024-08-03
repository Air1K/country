import React, {FC, useEffect, useState} from 'react';
import {CountryDetail} from "../../models/api.model";
import {useParams} from "react-router-dom";
import {fetchCountryByCca3} from "../../services/api";
import CountryDetailComponent from "../../components/CountryDetailComponent/CountryDetailComponent";
import LoaderComponent from "../../components/Loader/LoaderComponent";
import ErrorState from "../../components/ErrorState/ErrorState";



const CountryPage:FC = () => {
    const { cca3 } = useParams<{ cca3: string }>();
    const [country, setCountry] = useState<CountryDetail | null>(null);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const getCountry = async () => {
            if (cca3) {
                try {
                    const countryData = await fetchCountryByCca3(cca3);
                    setCountry(countryData);
                } catch (error) {
                    console.error("Error fetching country:", error);
                    setError("Error fetching country");
                }

            }
        };
        getCountry();
    }, [cca3]);

    return (
        error ? <ErrorState message={error} />:
        <div>
            {country ? <CountryDetailComponent country={country} /> : <LoaderComponent/>}
        </div>
    );
};

export default CountryPage;

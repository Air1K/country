import axios from 'axios';
import {Country, CountryDetail} from "../models/api.model";

const API_URL = 'https://restcountries.com/v3.1';

export const fetchCountries = async (): Promise<Country[]> => {
    const response = await axios.get<Country[]>(`${API_URL}/all?fields=name,flags,cca3,population,region,subregion,capital`);
    return response.data;
};

export const fetchCountryByCca3 = async (cca3: string): Promise<CountryDetail> => {
    const response = await axios.get<CountryDetail[]>(`${API_URL}/alpha/${cca3}`);
    return response.data[0];
};

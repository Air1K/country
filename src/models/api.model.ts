export interface Country {
    name: {
        common: string;
    };
    flags: {
        svg: string;
    };
    cca3: string;
    population: number;
    region: string;
    subregion: string;
    capital: string[];
}

export interface CountryDetail extends Country {
    capital: string[];
    subregion: string;
    languages: { [key: string]: string };
    borders: string[];
}

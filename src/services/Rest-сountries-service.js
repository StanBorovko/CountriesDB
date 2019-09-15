export default class RestCountriesService {
    _apiBase = 'https://restcountries.eu/rest/v2';

    getResource = async url => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getCountry = async code => {
        const country = await this.getResource(`/alpha/${code}?fields=name;capital;currencies;languages;flag;population`);
        return country;
    };

    getAllCountriesInRegion = async region => {
        return await this.getResource(`/region/${region}`);
    };
}
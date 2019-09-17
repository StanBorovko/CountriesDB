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
        return await this.getResource(`/alpha/${code}?fields=name;capital;currencies;languages;flag;population`);
    };

    getAllCountriesInRegion = async region => {
        return await this.getResource(`/region/${region}`);
    };

    getAllSubregions = async region => {
        const subregions = await this.getResource(`/region/${region}?fields=subregion`);
        return RestCountriesService._findUniqItems(subregions);
    };

    getAllLanguages = async region => {
        const subregions = await this.getResource(`/region/${region}?fields=languages`);
        return RestCountriesService._findUniqItems(subregions);
    };

    static _findUniqItems = items => {
        return items.reduce((acc, item) => {
            if (acc.indexOf(item) === -1) {
                acc.push(item);
            }
        }, []);
    }
}


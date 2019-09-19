import axios from 'axios';
import C from '../constants';
import {getCounrtyCodes} from "../resorces/country-codes";

const _apiBase = 'https://restcountries.eu/rest/v2';

const _findUniqItems = items => {
    return items.reduce((acc, item) => {
        if (acc.indexOf(item) === -1) {
            acc.push(item);
        }
        return acc;
    }, []);
};

const _findUniqSubregions = items => {
    const subregions = items.map(item => item['subregion']);
    return _findUniqItems(subregions)
};

const _findUniqLanguages = items => {
    const languages = items.map(item => item['languages']['name']);
    return _findUniqItems(languages)
};

export const getRandomCountry = () => {

    return function(dispatch) {
        const countryCodes = getCounrtyCodes(),
            randomIndex = Math.floor(Math.random() * (countryCodes.length + 1)),
            randomCode = countryCodes[randomIndex];

        dispatch({
            type: C.FETCH_COUNTRY
        });

        return axios.get(_apiBase + `/alpha/${randomCode}?fields=name;capital;currencies;languages;flag;population`)
            .then(function(response){
                // console.log('response', response);
                dispatch({
                    type: C.FETCH_COUNTRY_SUCCESS,
                    country: response.data
                })
            })
            .catch(err => {
                console.log('err:', err);
                dispatch({
                type: C.FETCH_COUNTRY_FAILURE,
                payload: err.message
            })})
    }
};


export const getAllCountriesInRegion = (region) => {

    return function(dispatch) {

        dispatch({
            type: C.FETCH_COUNTRIES_IN_REGION
        });

        return axios.get(_apiBase + `/region/${region}?fields=name;alpha3Code;capital;currencies;languages;flag;population`)
            .then(function(response){
                // console.log('response', response);
                dispatch({
                    type: C.FETCH_COUNTRIES_IN_REGION_SUCCESS,
                    countries: response.data
                })
            })
            .catch(err => {
                console.log('err:', err);
                dispatch({
                    type: C.FETCH_COUNTRIES_IN_REGION_FAILURE,
                    payload: err.message
                })})
    }
};



export const getAllSubregions = (region) => {

    return function(dispatch) {

        dispatch({
            type: C.FETCH_ALL_SUBREGIONS
        });

        return axios.get(_apiBase + `/region/${region}?fields=name;alpha3Code;subregion`)
            .then(function(response){
                // console.log('getAllSubregions response', response);
                const unic =  _findUniqSubregions(response.data);
                // console.log('unic' , unic);
                dispatch({
                    type: C.FETCH_ALL_SUBREGIONS_SUCCESS,
                    filterItems: unic
                })
            })
            .catch(err => {
                console.log('err:', err);
                dispatch({
                    type: C.FETCH_ALL_SUBREGIONS_FAILURE,
                    payload: err.message
                })})
    }
};

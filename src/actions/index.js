import axios from 'axios';
import C from '../constants';
import {getCounrtyCodes} from "../resorces/country-codes";

const _apiBase = 'https://restcountries.eu/rest/v2';


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

        return axios.get(_apiBase + `/alpha/${region}?fields=name;capital;currencies;languages;flag;population`)
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

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
    }, []).sort();
};

const _findUniqSubregions = items => {
    const subregions = items.map(item => item['subregion']);
    return _findUniqItems(subregions)
};

const _findUniqLanguages = items => {
    const languages = items.map(item => item['languages'].map(language => language['name']));
    return _findUniqItems(languages.flat())
};

export const getRandomCountry = () => {

    return function (dispatch) {
        const countryCodes = getCounrtyCodes(),
            randomIndex = Math.floor(Math.random() * (countryCodes.length + 1)),
            randomCode = countryCodes[randomIndex];
        console.log(countryCodes);


        dispatch({
            type: C.FETCH_COUNTRY
        });

        return axios.get(_apiBase + `/alpha/${randomCode}?fields=name;capital;currencies;languages;flag;population`)
            .then(function (response) {
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
                })
            })
    }
};

export const getAllCountries = () => {

    return function (dispatch) {

        dispatch({
            type: C.FETCH_ALL_COUNTRIES
        });

        return axios.get(_apiBase + `/all?fields=name;alpha3Code;region`)
            .then(function (response) {
                dispatch({
                    type: C.FETCH_ALL_COUNTRIES_SUCCESS,
                    countries: response.data
                })
            })
            .catch(err => {
                console.log('err:', err);
                dispatch({
                    type: C.FETCH_ALL_COUNTRIES_FAILURE,
                    payload: err.message
                })
            })
    }
};


export const getAllCountriesInRegion = (region) => {

    return function (dispatch) {

        dispatch({
            type: C.FETCH_COUNTRIES_IN_REGION
        });

        return axios.get(_apiBase + `/region/${region}?fields=name;alpha3Code;capital;currencies;languages;flag;population;subregion`)
            .then(function (response) {
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
                })
            })
    }
};


export const getAllSubregions = (region) => {

    return function (dispatch) {

        dispatch({
            type: C.FETCH_ALL_SUBREGIONS
        });

        return axios.get(_apiBase + `/region/${region}?fields=name;alpha3Code;subregion`)
            .then(function (response) {
                const unic = _findUniqSubregions(response.data);
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
                })
            })
    }
};

export const getAllLanguages = (region) => {

    return function (dispatch) {

        dispatch({
            type: C.FETCH_ALL_LANGUAGES
        });

        return axios.get(_apiBase + `/region/${region}?fields=name;alpha3Code;languages`)
            .then(function (response) {
                const unic = _findUniqLanguages(response.data);
                dispatch({
                    type: C.FETCH_ALL_LANGUAGES_SUCCESS,
                    filterItems: unic
                })
            })
            .catch(err => {
                console.log('err:', err);
                dispatch({
                    type: C.FETCH_ALL_LANGUAGES_FAILURE,
                    payload: err.message
                })
            })
    }
};

const getFavoritesFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(C.FAVORITES));
};

const setFavoritesToLocalStorage = (newFavorites) => {
    localStorage.setItem(C.FAVORITES, JSON.stringify(newFavorites));
};

export const isFavorite = (item) => {
    const favorites = getFavoritesFromLocalStorage();
    let isFavorite = false;
    if (favorites) {
        isFavorite = favorites.indexOf(item) !== -1;
    }
    return {type: C.IS_FAVORITE, isFavorite}
};

export const addToFavorites = (item) => {
    const favorites = getFavoritesFromLocalStorage();
    let newFavorites;
    if (favorites && favorites.indexOf(item) === -1) {
        newFavorites = [...favorites, item];
    } else if (!favorites) { //if there no favorites start new favorites list
        newFavorites = [item];
    } else {
        newFavorites = favorites;
    }
    setFavoritesToLocalStorage(newFavorites);
    return {type: C.ADD_TO_FAVORITES}
};

export const removeFromFavorites = (item) => {
    const favorites = getFavoritesFromLocalStorage();
    let removingIndex, newFavorites;
    if (favorites) {
        removingIndex = favorites.indexOf(item);
        newFavorites = [
            ...favorites.splice(0, removingIndex),
            ...favorites.splice(removingIndex)
        ];
    }

    setFavoritesToLocalStorage(newFavorites);
    return {type: C.REMOVE_FROM_FAVORITES}
};

export const getAllFavorites = () => {
    const favorites = getFavoritesFromLocalStorage();
    return {type: C.GET_ALL_FAVORITES, favorites}
};


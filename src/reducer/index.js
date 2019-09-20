import {combineReducers} from 'redux'

import country from './country';
import countries from './countries';
import filter from './filter';
import favorites from './favorites';

export default combineReducers({
    country,
    countries,
    filter,
    favorites
})
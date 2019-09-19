import {combineReducers} from 'redux'

import country from './country';
import countries from './countries';
import filter from './filter';

export default combineReducers({
    country,
    countries,
    filter
})
import C from '../constants'


const defaultState = {
    loading: true,
    countries: null,
    error: false
};

export default (state = defaultState, action) => {
    const {type, countries} = action;
    switch(type) {

        case C.FETCH_COUNTRIES_IN_REGION:
            return {...state};

        case C.FETCH_COUNTRIES_IN_REGION_SUCCESS:
            return {...state, countries: countries, loading: false};

        case C.FETCH_COUNTRIES_IN_REGION_FAILURE:
            return {...state, error: true, loading: false};

        default:
            return state;
    }

}
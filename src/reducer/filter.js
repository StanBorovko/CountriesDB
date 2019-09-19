import C from '../constants'

const defaultState = {
    filterItems: []
};

export default (state = defaultState, action) => {
    const {type, filterItems} = action;
    switch(type) {

        case C.FETCH_ALL_SUBREGIONS:
            return {...state};

        case C.FETCH_ALL_SUBREGIONS_SUCCESS:
            return {...state, filterItems: filterItems};

        case C.FETCH_ALL_SUBREGIONS_FAILURE:
            return {...state, error: true};

        case C.FETCH_ALL_LANGUAGES:
            return {...state};

        case C.FETCH_ALL_LANGUAGES_SUCCESS:
            return {...state, filterItems: filterItems};

        case C.FETCH_ALL_LANGUAGES_FAILURE:
            return {...state, error: true};

        default:
            return state;
    }

}


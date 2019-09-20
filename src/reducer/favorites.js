import C from '../constants'

const defaultState = {
    isFavorite: false,
    favorites: []
};

export default (state = defaultState, action) => {
    const {type, isFavorite, favorites} = action;
    switch(type) {

        case C.IS_FAVORITE:
            return {isFavorite};

        case C.ADD_TO_FAVORITES:
            return true;

        case C.REMOVE_FROM_FAVORITES:
            return true;

        case C.GET_ALL_FAVORITES:
            return {favorites};

        default:
            return state;
    }

}
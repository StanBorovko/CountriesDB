import {getCounrtyCodes} from "../resorces/country-codes";

const randomCode = store => next => action => {
    if(! action.getRandomCountry) {
        return next(action);
    }
    const countryCodes = getCounrtyCodes(),
        randomIndex = Math.floor(Math.random() * (countryCodes.length + 1));
    next({
        ...action,
        randomCode: countryCodes[randomIndex]
    })
};

export  default randomCode;
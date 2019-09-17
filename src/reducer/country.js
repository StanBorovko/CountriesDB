import C from '../constants'


const defaultState = {
    loading: true,
    country: null,
    error: false
};

export default (state = defaultState, action) => {
    const {type, country} = action;
    switch(type) {

        case C.FETCH_COUNTRY:
            return {...state};

        case C.FETCH_COUNTRY_SUCCESS:
            return {...state, country: country, loading: false};

        case C.FETCH_COUNTRY_FAILURE:
            return {...state, error: true, loading: false};

        /*case C.PLACE_ORDER:
            return [...state, {...payload, id: randomId, status: 'pending'}]

        case C.FULLFILL_ORDER:
            return state.map((order,index) => {
                return order.id === payload ?
                    {...order, status: 'fullfilled'} : order
            })
        case C.PAY_FOR_ORDER:
            return state.map((order,index) => {
                return order.id === payload ?
                    {...order, status: 'paid'} : order
            })

        case C.CANCEL_ORDER:
            return state.filter((order,index) => index !== payload)*/

        default:
            return state;
    }

}


import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducer'

import randomCode from '../middlewares/random-code'



const enhancer = composeWithDevTools(applyMiddleware(thunk, randomCode));

const store = createStore(reducer, {}, enhancer);
window.store = store;

export default store;
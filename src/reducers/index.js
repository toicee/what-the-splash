import { combineReducers } from 'redux';

import loadingdReducer from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
    isLoading: loadingdReducer,
    images: imagesReducer,
    error: errorReducer,
    nextPage: pageReducer,
    imagesStats: statsReducer,
});

export default rootReducer;

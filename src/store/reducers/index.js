import { combineReducers } from 'redux';

const data = (state = '', action) => {
    if (action.type === 'FIRST_ACTION') {
        return action.payload;
    }
    return 'data reducer';
}

const rootReducer = combineReducers({
    data: data
});

export default rootReducer;
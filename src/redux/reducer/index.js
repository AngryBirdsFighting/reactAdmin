import * as type from '../action/type.js';
import { combineReducers } from 'redux';
const permissionData = (state = [], action) => {
    switch(action.type){
        case type.SET_PERMISSION:
        return Object.assign({}, state, {
            visibilityFilter: action.filter
          });
        default: 
        return {}
    }
}

export default combineReducers({
    httpData
});

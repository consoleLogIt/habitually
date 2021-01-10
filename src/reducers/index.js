import {dailyReducer} from './dailyReducer';
import {weeklyReducer} from './weeklyReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    dailyReducer,
    weeklyReducer
})

export default rootReducer;
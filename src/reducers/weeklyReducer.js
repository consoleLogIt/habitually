import {  GET_CURRENT_WEEK } from "../actions/types";
import moment from 'moment';

const InitialState = {
    currentWeek:[],
}



export const weeklyReducer = (state = InitialState,action) =>{
    switch(action.type){

        case GET_CURRENT_WEEK:
            const week = [];
            for(let i=0;i<7;i++){
            week[i]= {
               day: moment().subtract(6-i,'days').format('ddd'),
               date:moment().subtract(6-i,'days').format('DD')   
            }
            }   

            return{
                ...state,
                currentWeek:week
            } 
      
           
        default:
            return state;
    }

}


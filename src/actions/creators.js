import { ADD_HABIT,DELETE_HABIT,GET_CURRENT_WEEK,TASK_ICON_CHANGE } from "./types";


//add new habit 
export const add_new_habit = (habit) => {
    return{
        type:ADD_HABIT,
        habit
    }
}



//delete a habit
export const delete_habit = (id) => {
    return {
        type:DELETE_HABIT,
        id
    }
}


//get current week for week view
export const get_current_week = ()=> {
    return {
        type:GET_CURRENT_WEEK,
    }


}

//change checkbox icon [checked,unchecked,crossed]
export const task_icon_change = (value,taskIndex,dayIndex) => {
    return {
        type:TASK_ICON_CHANGE,
        value,
        taskIndex,
        dayIndex
    }
}


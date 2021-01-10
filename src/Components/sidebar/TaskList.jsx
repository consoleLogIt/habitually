import React from "react";
import { Grid} from "@material-ui/core";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {useStore} from 'react-redux';



function TaskList(props) {
    const {name,fireScore,index,handleDeleteHabit} = props;

   
  return (
    <li>
      <Grid container>
        <Grid item xs={8}>
        {name}
        </Grid>
        <Grid item xs={2}>
          <WhatshotIcon />{fireScore}
        </Grid>
        <Grid item xs={2}>
        <DeleteOutlineIcon style={{cursor:"pointer"}} onClick = {()=>handleDeleteHabit(index)} />
        </Grid>
      </Grid>
    </li>
  );
}

export default TaskList;

import React,{useEffect} from "react";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import * as moment from 'moment';

import { Grid, Typography, Paper, Tab, Tabs } from "@material-ui/core";
import {useStore} from 'react-redux';

function HomeHeader(props) {
  const {handleTabChange,tabState} = props;
  const store = useStore();
  const {TotalFireScore}  = store.getState().dailyReducer




 
  return (
    <>
      <Grid container style={{ padding: "5% 5% 2% 5%" }}>
        <Grid item xs={11}>
          <Typography variant="h3">{`${moment().format('MMM')},  ${moment().format('dddd')}`} </Typography>
          <Grid container spacing={2} style={{paddingTop:"1%"}}>
            <Grid item><WbSunnyIcon style={{ color: "#f9d71c" }} /></Grid>
            <Grid item><Typography style={{fontSize:"1.1rem"}}>{moment().format("HH:mm")}</Typography></Grid>
          </Grid>
         
          
        </Grid>
        <Grid item xs={1}>
          <Typography>
            <WhatshotIcon style={{ color: "#e25822" }} fontSize="large" />
           {TotalFireScore}
          </Typography>
        </Grid>
      </Grid>

      <Paper square>
        <Tabs
          value={tabState}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleTabChange}
        >
          <Tab label="Daily" />
          <Tab label="Weekly" />
        </Tabs>
      </Paper>
    </>
  );
}

export default HomeHeader;

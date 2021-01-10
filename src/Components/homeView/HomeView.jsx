import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";

import { DailyView, HomeHeader,WeeklyView } from "../";

function HomeView(props) {
  const [tabState, setTabState] = useState(0);
 

  const handleTabChange = (event, newvalue) => {
    setTabState(newvalue);
  };


  return (
    <>
      <Grid style={{ display: "hidden" }} item xs={3}></Grid>
      <Grid item xs={9} style={{ backgroundColor: "rgb(255 255 255)" }}>
        <Paper elevation={3}>
          <HomeHeader handleTabChange={handleTabChange} tabState={tabState} />
          {!tabState ? <DailyView /> : <WeeklyView />}
        </Paper>
      </Grid>
    </>
  );
}

export default HomeView;

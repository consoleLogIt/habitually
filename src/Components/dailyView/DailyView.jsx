import React from "react";
import { Grid, Card, Paper, Checkbox,Typography } from "@material-ui/core";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useStore } from "react-redux";
import { task_icon_change } from "../../actions/creators";

function DailyView(props) {
  const store = useStore();
  const { dailyTask, weekStatus } = store.getState().dailyReducer;
  

  const handleStatusOnChange = (val, taskIndex, dayIndex, daily) => {
    console.log(val);
    if (val) {
      store.dispatch(task_icon_change(1, taskIndex, dayIndex, daily));
    } else {
      store.dispatch(task_icon_change(0, taskIndex, dayIndex, daily));
    }
  };
  return (
    <>
      <Paper style={{ padding: "10px" }} square>
        Pending
      </Paper>
      <Grid container style={{ padding: "1% 5%", fontSize: "1.1rem" }}>
        {dailyTask.length !== 0 ? (
          dailyTask.map((item, index) => {
            if (weekStatus[index].status[6] !== 1) {
              return (
                <Grid
                  style={{ margin: "1%", alignItems: "center" }}
                  item
                  xs={12}
                >
                  <Card
                    style={{
                      padding: "3px",
                      justifyContent: "space-between",
                      backgroundColor:"#D0D0D0"
                    }}
                  >
                    <Grid container>
                      <Grid item xs={8}>
                        <Checkbox
                          onChange={(e, val) =>
                            handleStatusOnChange(val, index, 6, true)
                          }
                          color="primary"
                        />
                        {item.name}
                      </Grid>
                      <Grid style={{ marginTop: "5px" }} item xs={2}>
                        <WhatshotIcon />
                        +1
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              );
            }
          })
        ) : (
          <Typography color = "textSecondary">No Task</Typography>
        )}
      </Grid>

      <Paper style={{  padding: "10px" }} square>
        Done
      </Paper>
      <Grid container style={{ padding: "1% 5%", fontSize: "1.1rem" }}>
        {dailyTask.length !== 0 ? (
          dailyTask.map((item, index) => {
            if (weekStatus[index].status[6] === 1) {
              return (
                <Grid style={{ margin: "1%" }} item xs={12}>
                  <Card style={{ padding: "3px", backgroundColor:"#D0D0D0"}}>
                    <Checkbox
                      checked="true"
                      onChange={(e, val) =>
                        handleStatusOnChange(val, index, 6, true)
                      }
                      color="primary"
                    />
                    {item.name}
                  </Card>
                </Grid>
              );
            }
          })
        ) : (
          <Typography color = "textSecondary">No Task</Typography>
        )}
      </Grid>
    </>
  );
}

export default DailyView;

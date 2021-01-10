import React, { useState, useEffect } from "react";
import { Grid, Divider, Paper, Checkbox, Typography } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { useStore } from "react-redux";
import { get_current_week, task_icon_change } from "../../actions/creators";
function WeeklyView(props) {
  const store = useStore();
  const { currentWeek } = store.getState().weeklyReducer;
  const { dailyTask, weekStatus } = store.getState().dailyReducer;

  useEffect(() => {
    store.dispatch(get_current_week());
  }, []);

  const handleOnChangeIcon = (e, value, taskIndex, dayIndex) => {
    if (value == 2) {
      value = 0;
    } else {
      value++;
    }
    store.dispatch(task_icon_change(value, taskIndex, dayIndex));
  };

  return (
    <>
      <Paper style={{ padding: "10px" }} square>
        Weekly
      </Paper>
      <Grid container>
        <Grid
          style={{ justifyContent: "center", margin: "0" }}
          container
          spacing={10}
        >
          {currentWeek.map((item) => (
            <Grid item>
              <Typography>{item.day}</Typography>
              <Typography style={{ textAlign: "center" }}>
                {item.date}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid container justify="center">
        {dailyTask.length !== 0 ? (
          dailyTask.map((task, index) => (
            <Grid item xs={12}>
              <Grid container style={{ justifyContent: "center" }}>
                <Grid item xs style={{ marginBottom: "1%" }}>
                  <Divider />
                  <Typography style={{ textAlign: "center", padding: "1%" }}>
                    {task.name}
                  </Typography>
                  <Divider />
                </Grid>

                <Grid
                  container
                  spacing={8}
                  style={{ justifyContent: "center", margin: "0" }}
                >
                  {weekStatus.map((day, taskIndex) => {
                    if (index === taskIndex) {
                      return day.status.map((i, dayIndex) => {
                        if (i === 0)
                          return (
                            <Grid item>
                              {" "}
                              <Checkbox
                                onChange={(e) =>
                                  handleOnChangeIcon(e, 0, taskIndex, dayIndex)
                                }
                                color="primary"
                              />
                            </Grid>
                          );
                        else if (i === 1)
                          return (
                            <Grid item>
                              <Checkbox
                                checked
                                onChange={(e) =>
                                  handleOnChangeIcon(e, 1, taskIndex, dayIndex)
                                }
                                color="primary"
                              />
                            </Grid>
                          );
                        else
                          return (
                            <Grid item>
                              <Checkbox
                                checkedIcon={<CancelIcon />}
                                checked
                                onChange={(e) =>
                                  handleOnChangeIcon(e, 2, taskIndex, dayIndex)
                                }
                                color="secondary"
                              />
                            </Grid>
                          );
                      });
                    }
                  })}
                </Grid>
              </Grid>
            </Grid>
          ))
        ) : (
          <Grid item>
            <Typography color="textSecondary">No Task</Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default WeeklyView;

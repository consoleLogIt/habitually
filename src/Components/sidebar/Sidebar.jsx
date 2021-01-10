import React, { useState } from "react";
import { Grid, Typography, Avatar, Button } from "@material-ui/core";
import styles from "./sidebar.module.css";
import { AddHabbit } from "../";
import TaskList from "./TaskList";
import { useStore } from "react-redux";
import { delete_habit } from "../../actions/creators";

function Sidebar(props) {
  const [modalShow, setModalShow] = useState(false);
  const store = useStore();
  const { dailyTask, weekStatus } = store.getState().dailyReducer;

  const handleDeleteHabit = (id) => {
    store.dispatch(delete_habit(id));
  };

  return (
    <Grid className={styles.Container}>
      <Grid container style={{ alignItems: "center",justifyContent:"center",paddingTop:"3%" }}>
        <Grid item xs={3}>
          <Avatar style={{ backgroundColor: "#2a67f4" }}>K</Avatar>
        </Grid>
        <Grid item xs={5}>
          <Typography>Kishan Singh</Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          marginTop: "80px",
          padding: "10px",
          backgroundColor: "#2a67f4",
          borderRadius: "2%",
        }}
      >
        Habits
      </Grid>
      <div>
        <ul className={styles.tasklist}>
          {dailyTask.length !== 0 ? (
            dailyTask.map((item, index) => (
              <TaskList
                name={item.name}
                fireScore={weekStatus[index].fireScore}
                handleDeleteHabit={handleDeleteHabit}
                index={index}
              />
            ))
          ) : (
            null
          )}

          <Button onClick={() => setModalShow(true)} style={{ color: "white" }}>
            Add new +
          </Button>
        </ul>
      </div>
      <AddHabbit modalShow={modalShow} setModalShow={setModalShow} />
    </Grid>
  );
}

export default Sidebar;

import React, { useRef } from "react";
import {
  Modal,
  Backdrop,
  Fade,
  Grid,
  TextField,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useStore } from "react-redux";
import { add_new_habit } from "../../actions/creators";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function AddHabbit(props) {
  const classes = useStyles();
  const textRef = useRef();
  const store = useStore();

  const handleAddHabit = () => {
    let valueRef = textRef.current.childNodes[1].childNodes[0];
    const habit = {
      name: valueRef.value,
    };
    store.dispatch(add_new_habit(habit));
    valueRef.value = "";
  };

  return (
    <Modal
      className={classes.modal}
      open={props.modalShow}
      onClose={() => props.setModalShow(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.modalShow}>
        <div className={classes.paper}>
          <Grid container>
            <Grid item>
              <TextField ref={textRef} label="Habbit Name" color="primary" />
            </Grid>
            <Grid item>
              <IconButton onClick={handleAddHabit}>
                <AddCircleOutlineIcon fontSize="large" color="primary" />
              </IconButton>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
}

export default AddHabbit;

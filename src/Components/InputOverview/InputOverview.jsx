import React, { useState } from "react";
import { Button, Grid } from "@mui/material";

import { useDispatch } from "react-redux";
import { addTask, deleteAllTask } from "../../redux/Actions/actions";

export default function InputOverview() {
  const [newTaskValue, setNewTaskValue] = useState("");

  const dispatch = useDispatch();

  const addNewTask = () => {
    let newTask = {
      id: new Date().getTime(),
      taskName: newTaskValue,
      completed: false,
    };
    setNewTaskValue("");
    dispatch(addTask(newTask));
  };

  const handleNewTaskValue = (e) => {
    setNewTaskValue(e.target.value);
  };
  return (
    <>
      <Grid item sm={8} xs={12}>
        <input
          value={newTaskValue}
          onChange={(e) => handleNewTaskValue(e)}
          className="form-control"
        />
      </Grid>
      <Grid item sm={2} xs={6}>
        <Button
          style={{ width: "100%" }}
          variant="contained"
          onClick={() => addNewTask()}
        >
          Add
        </Button>
      </Grid>
      <Grid item sm={2} xs={6}>
        <Button
          style={{ width: "100%" }}
          variant="outlined"
          onClick={() => dispatch(deleteAllTask())}
        >
          Clear all
        </Button>
      </Grid>
    </>
  );
}

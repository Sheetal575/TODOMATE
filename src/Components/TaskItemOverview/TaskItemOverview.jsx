import { React, useState } from "react";
import { Checkbox, Grid, Button } from "@mui/material";
import {
  removeTask,
  handleCheckbox,
  editTask,
} from "../../redux/Actions/actions";
import { useSelector, useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";
export default function TaskItemOverview({ task }) {
  const [isEditTask, setIsEditTask] = useState(false);
  const [editvalue, setEditValue] = useState(task.taskName);
  const dispatch = useDispatch();

  const handleEditTaskValue = (e) => {
    setEditValue(e.target.value);
  };
  const updateTask = () => {
    let editData = {
      id: task.id,
      taskName: editvalue,
      completed: task.completed,
    };
    setIsEditTask(false);
    dispatch(editTask(editData));
  };
  return (
    <Grid item container justifyContent="space-between">
      <Grid item container xs={8} alignItems="center">
        <Grid item>
          <Checkbox
            onChange={() => dispatch(handleCheckbox(task.id))}
            value={task.completed}
            checked={task.completed}
          />
        </Grid>
        <Grid item>
          {!isEditTask ? (
            task.taskName
          ) : (
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <input
                className="form-control"
                value={editvalue}
                onChange={(e) => handleEditTaskValue(e)}
              />
              <Button>
                <ClearIcon onClick={() => setIsEditTask(false)} />
              </Button>
            </div>
          )}
        </Grid>
      </Grid>
      <Grid item container xs={4} justifyContent="flex-end">
        <Button
          variant="outlined"
          style={{
            color: "green",
            border: "2px solid green",
            marginLeft: "5px",
          }}
          //onClick={() => editTask()}
          onClick={() => (!isEditTask ? setIsEditTask(true) : updateTask())}
        >
          {!isEditTask ? <EditIcon /> : <DoneIcon />}
        </Button>

        <Button
          variant="outlined"
          style={{ color: "red", border: "2px solid red", marginLeft: "7px" }}
          onClick={() => dispatch(removeTask(task.id))}
        >
          <DeleteIcon />
        </Button>
      </Grid>
    </Grid>
  );
}

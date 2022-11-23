import { React, useState } from "react";
import { Button, Grid } from "@mui/material";
import AllTaskOverview from "../AllTaskOverview/AllTaskOverview";
import ActiveTaskOverview from "../ActiveTaskOverview/ActiveTaskOverview";
import CompletedTaskOerview from "../CompletedTaskOverview/CompletedTaskOverview";
import TaskItemOverview from "../TaskItemOverview/TaskItemOverview";
import { useSelector, useDispatch } from "react-redux";
import { completedTask } from "../../redux/Actions/actions";

export default function TaskListOverview() {
  const [currentTab, setCurrentTab] = useState("allTask");
  const taskList = useSelector((state) => state.taskOperationReducers);

  let renderTab = {
    allTask: <AllTaskOverview taskList={taskList} />,
    activeTask: <ActiveTaskOverview taskList={taskList} />,
    completedTask: <CompletedTaskOerview taskList={taskList} />,
  };

  const filterTask = (filterValue) => {
    return renderTab[filterValue];
  };
  return (
    <>
      <Grid item direction="row" container spacing={3} justifyContent="center">
        <Grid item>
          <Button
            variant="outlined"
            style={{
              fontSize: "1.1rem",
            }}
            onClick={() => setCurrentTab("allTask")}
          >
            All Tasks
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            style={{
              fontSize: "1.1rem",
            }}
            onClick={() => setCurrentTab("activeTask")}
          >
            Active Tasks
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            style={{
              fontSize: "1.1rem",
            }}
            onClick={() => setCurrentTab("completedTask")}
          >
            Completed Tasks
          </Button>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="column"
        alignItems="center"
        style={{
          padding: "3% 0%",
        }}
        spacing={2}
      >
        {filterTask(currentTab)}
      </Grid>
    </>
  );
}

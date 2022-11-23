import Reactc, { useState } from "react";
import { Grid, Card } from "@mui/material";
import InputOverview from "./InputOverview/InputOverview";
import TaskListOverview from "./TaskListOverview/TaskListOverview";

export default function HomeOverview() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xl={7} lg={10} xs={12}>
        <Card style={{ padding: "3%", textAlign: "center" }}>
          <Grid container direction="column" spacing={4}>
            <Grid item>
              <h3>TodoMatic</h3>
              <h6 style={{ color: "grey" }}>Keep track on your tasks</h6>
            </Grid>
            <Grid item container justifyContent="center" spacing={2}>
              <InputOverview />
            </Grid>
            <Grid item container>
              <TaskListOverview />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

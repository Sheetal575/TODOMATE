import React from "react";
import TaskItemOverview from "../TaskItemOverview/TaskItemOverview";

export default function AllTaskOverview({ taskList }) {
  return (
    <>
      {taskList.length > 0
        ? taskList.map((e) => <TaskItemOverview task={e} />)
        : "No Task . please add task first"}
    </>
  );
}

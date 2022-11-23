import React, { useState, useEffect } from "react";
import TaskItemOverview from "../TaskItemOverview/TaskItemOverview";
export default function ActiveTaskOverview({ taskList }) {
  const [activeTasks, setActiveTasks] = useState([]);
  useEffect(() => {
    const list = taskList.filter((task) => task.completed != true);
    setActiveTasks(list);
  }, [taskList]);
  return (
    <>
      {activeTasks.length > 0
        ? activeTasks.map((e) => <TaskItemOverview task={e} />)
        : "No Active Tasks"}
    </>
  );
}

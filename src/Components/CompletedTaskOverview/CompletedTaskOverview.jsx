import React, { useEffect, useState } from "react";
import TaskItemOverview from "../TaskItemOverview/TaskItemOverview";
export default function CompletedTaskOerview({ taskList }) {
  const [completedTask, setCompletedTask] = useState([]);
  useEffect(() => {
    const list = taskList.filter((task) => task.completed != false);
    setCompletedTask(list);
  }, [taskList]);
  return (
    <>
      {completedTask.length > 0
        ? completedTask.map((e) => <TaskItemOverview task={e} />)
        : "No Completed Task "}
    </>
  );
}

import { useEffect } from "react";
import { useTasks } from "../context/TaskContext.jsx";
import TaskCard from "../components/TaskCard.jsx";

function TaskPage() {
  const { tasks, loadTasks } = useTasks();
  useEffect(() => {
    loadTasks();
  }, [tasks]);

  function renderMain(tasks) {
    if (tasks.length === 0) return <h1>No tasks yet</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }
  return (
    <div>
      <h1>Tasks</h1>
      {renderMain(tasks)}
    </div>
  );
}

export default TaskPage;

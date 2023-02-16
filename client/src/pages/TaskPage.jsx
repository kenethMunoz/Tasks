import { useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useTasks } from "../context/TaskContext.jsx";
import TaskCard from "../components/TaskCard.jsx";

function TaskPage() {
  const { tasks, loadTasks } = useTasks();
  const [animate] = useAutoAnimate();
  useEffect(() => {
    loadTasks();
  }, [tasks]);

  function renderMain(tasks) {
    if (tasks.length === 0) return <h1>No tasks yet</h1>;
    return (
      <>
        <ul ref={animate}>
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </ul>
      </>
    );
  }
  return (
    <div className="container">
      <h1 className="text-info">Tasks</h1>
      {renderMain(tasks)}
    </div>
  );
}

export default TaskPage;

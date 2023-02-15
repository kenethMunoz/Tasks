import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext.jsx";
import { useParams, useNavigate } from "react-router-dom";
function TaskForm() {
  const params = useParams();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: "", description: "" });
  const loadTask = async (id) => {
    if (id) {
      const { data } = await getTask(params.id);
      setTask({
        title: data.title,
        description: data.description,
        id: data.id,
      });
    }
  };

  useEffect(() => {
    loadTask(params.id);
  }, []);
  return (
    <div>
      <h1>{params.id ? "Edit Task" : "New Task"}</h1>
      <Formik
        initialValues={task}
        enableReinitialize="true"
        onSubmit={async (values, actions) => {
          if (params.id) {
            updateTask(values, actions);
            navigate("/");
          } else {
            createTask(values, actions);
          }
          setTask({ title: "", description: "" });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />
            <label>description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;

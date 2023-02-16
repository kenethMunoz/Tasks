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
    <div className="d-flex h-75 align-items-center justify-content-center ">
      <div className="bg-info rounded-5 w-50 p-5 ">
        <h1 className="text-center">{params.id ? "Edit Task" : "New Task"}</h1>
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
            <Form
              className="d-flex flex-column justify-content-center"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label className="form-label">Title: </label>
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  placeholder="Write a title"
                  onChange={handleChange}
                  value={values.title}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description: </label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="3"
                  placeholder="Write a description"
                  onChange={handleChange}
                  value={values.description}
                ></textarea>
              </div>

              <div className="mb-3"></div>

              <button
                className="btn btn-dark"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default TaskForm;

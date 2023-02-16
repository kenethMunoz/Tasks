import React from "react";
import { Route, Routes } from "react-router-dom";
import TaskPage from "../pages/TaskPage.jsx";
import TaskForm from "../pages/TaskForm.jsx";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar.jsx";
function MainContent() {
  return (
    <div className="vh-100 ">
      <Navbar />

      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainContent;

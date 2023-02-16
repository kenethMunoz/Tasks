import React from "react";
import { TaskContextProvider } from "./context/TaskContext.jsx";
import MainContent from "./components/MainContent.jsx";

function App() {
  return (
    <TaskContextProvider>
      <MainContent />
    </TaskContextProvider>
  );
}

export default App;

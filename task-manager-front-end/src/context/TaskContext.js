import React, { createContext, useRef, useState } from "react";
import api from "../api";
const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  const [dataForm, setDataForm] = useState(null);
  const [getData, setGetData] = useState(null);
  const taskRef = useRef();
  const handleAddTask = async () => {
    try {
      const response = await api.post("/tasks/", dataForm);
      const { title, endData, taskStatus } = response.task;
      setGetData({
        title,
        endData,
        taskStatus,
      });
      console.log(response.message);
    } catch (e) {
      const errorMsg = e.response?.data?.message || "Task Creation Failed";
      console.error(errorMsg);
    }
  };
  function showModalWindow() {
    taskRef.current.showModal();
  }
  function closeModalWindow() {
    taskRef.current.close();
  }
  return (
    <TaskContext.Provider
      value={{
        handleAddTask,
        taskRef,
        showModalWindow,
        closeModalWindow,
        setDataForm,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;

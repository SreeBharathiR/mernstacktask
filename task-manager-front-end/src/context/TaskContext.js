import React, { createContext, useEffect, useRef, useState } from "react";
import api from "../api";
const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  const [dataForm, setDataForm] = useState({
    title: "",
    endDate: "",
    taskStatus: "",
  });
  const [getData, setGetData] = useState([]);
  const taskRef = useRef();

  const getAllTasks = async () => {
    try {
      const response = await api.get("/tasks/");
      setGetData(response.data.tasks);
      //   console.log("get all" + response.data.tasks);
      console.log(getData);
    } catch (e) {
      const errorMsg = e.response?.data?.message || "Getting All Tasks Failed";
      console.error(errorMsg);
    }
  };

  const handleAddTask = async () => {
    console.log(dataForm);
    const formatDate = new Date(dataForm.endDate).toLocaleDateString("en-GB");
    const taskData = { ...dataForm, endDate: formatDate };
    try {
      const response = await api.post("/tasks/", taskData);
      const { title, endDate, taskStatus, id } = response.data.task;
      setGetData([...getData, response.data.task]);
      setDataForm({
        title: "",
        endDate: "",
        taskStatus: "",
      });

      closeModalWindow();
    } catch (e) {
      const errorMsg = e.response?.data?.message || "Task Creation Failed";
      console.error(errorMsg);
    }
  };
  const handleDeleteTask = async (id) => {
    try {
      const response = await api.delete(`/tasks/${id}`);
      getAllTasks();
      console.log("Deleted");
    } catch (e) {
      const errorMsg = e.response?.data?.message || "Task Deletion Failed";
      console.error(errorMsg);
    }
  };
  const handleUpdateTask = async (id, updateData) => {
    try {
      console.log(updateData);
      const response = await api.patch(`/tasks/${id}`, updateData);
      getAllTasks();
    } catch (e) {
      const errorMsg = e.response?.data?.message || "Task Update Failed";
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
        handleDeleteTask,
        handleUpdateTask,
        taskRef,
        showModalWindow,
        closeModalWindow,
        setDataForm,
        getAllTasks,
        getData,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;

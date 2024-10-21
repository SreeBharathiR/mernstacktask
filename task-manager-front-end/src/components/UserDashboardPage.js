import React, { forwardRef, useContext, useEffect } from "react";
import "./UserDashboardPage.css";
import ModalAddTask from "./ModalAddTask";
import TaskContext from "../context/TaskContext";
import TaskCard from "./TaskCard";

const UserDashboardPage = () => {
  const {
    handleAddTask,
    handleDeleteTask,
    handleUpdateTask,
    showModalWindow,
    closeModalWindow,
    taskRef,
    setDataForm,
    getAllTasks,
    getData,
  } = useContext(TaskContext);
  useEffect(() => {
    getAllTasks();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className="dashboard">
      <h1 className="manage">Task Management</h1>
      <div className="tasksMain">
        <div className="taskCount taskCard">
          <h2 className="counts">{getData.length}</h2>
          <p className="taskHeadings">Total</p>
        </div>
        <div className="completedTask taskCard">
          <h2 className="counts">
            {getData.filter((data) => data.taskStatus === "Completed").length}
          </h2>
          <p className="taskHeadings">Completed</p>
        </div>
        <div className="incompleteTask taskCard">
          <h2 className="counts">
            {getData.length -
              getData.filter((data) => data.taskStatus === "Completed").length}
          </h2>
          <p className="taskHeadings">Incompleted</p>
        </div>
      </div>
      <div className="assigned">
        <p className="assignPara">Assigned Tasks</p>
        <button id="taskCreate" onClick={showModalWindow}>
          Create new Task
        </button>
      </div>
      <ModalAddTask ref={taskRef}>
        <p id="modalP">New Task:</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTask();
          }}
        >
          <div className="fields">
            <input
              type="text"
              name="title"
              className="inputField"
              required
              placeholder="Task Title"
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="endDate"
              placeholder="End Date"
              required
              className="inputField"
              onChange={handleInputChange}
            />
            <select
              name="taskStatus"
              className="selectStatus"
              onChange={handleInputChange}
              required
            >
              <option defaultValue="" disabled selected>
                Select Status
              </option>
              <option defaultValue="Not Started">Not Started</option>
              <option defaultValue="pending">Pending</option>
              <option defaultValue="completed">Completed</option>
            </select>
          </div>
          <div className="buttons">
            <button type="submit" className="modalButton1">
              Add
            </button>
            <button
              type="button"
              className="modalButton2"
              onClick={closeModalWindow}
            >
              Cancle
            </button>
          </div>
        </form>
      </ModalAddTask>
      <div className="tasks">
        {getData.map((data) => (
          <TaskCard
            key={data._id}
            data={data}
            deleteTask={handleDeleteTask}
            updateTask={handleUpdateTask}
          ></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default UserDashboardPage;

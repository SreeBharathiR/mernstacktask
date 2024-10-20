import React, { forwardRef, useContext } from "react";
import "./UserDashboardPage.css";
import ModalAddTask from "./ModalAddTask";
import TaskContext from "../context/TaskContext";

const UserDashboardPage = () => {
  const {
    handleAddTask,
    showModalWindow,
    closeModalWindow,
    taskRef,
    setDataForm,
  } = useContext(TaskContext);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className="dashboard">
      <h1 className="manage">Task Management</h1>
      <div className="tasksMain">
        <div className="taskCount taskCard">
          <h2 className="counts">8</h2>
          <p className="taskHeadings">Total</p>
        </div>
        <div className="completedTask taskCard">
          <h2 className="counts">2</h2>
          <p className="taskHeadings">Completed</p>
        </div>
        <div className="incompleteTask taskCard">
          <h2 className="counts">6</h2>
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
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="endData"
          placeholder="End Date"
          onChange={handleInputChange}
        />
        <select name="taskStatus" onChange={handleInputChange}>
          <option value="Not Started">Not Started</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <div className="buttons">
          <button className="modalButton1" onClick={handleAddTask}>
            Add
          </button>
          <button className="modalButton2" onClick={closeModalWindow}>
            Cancle
          </button>
        </div>
      </ModalAddTask>
      <div className="tasks"></div>
    </div>
  );
};

export default UserDashboardPage;

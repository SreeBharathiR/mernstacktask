import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./TaskCard.css";
const TaskCard = ({ data, deleteTask, updateTask }) => {
  const [isEdit, setIsEdit] = useState({
    title: false,
    taskStatus: false,
    endDate: false,
  });
  const [editVal, setEditVal] = useState({
    title: data.title,
    taskStatus: data.taskStatus,
    endDate: data.endDate,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditVal({ ...editVal, [name]: value });
  };
  const UpdatingTitle = (title) => {
    console.log(title);
    setIsEdit({ ...isEdit, [title]: true });
  };
  const updteData = (e) => {
    if (e.key === "Enter") {
      setIsEdit({ ...isEdit, [e.target.name]: false });
      updateTask(data._id, { [e.target.name]: editVal[e.target.name] });
    }
  };
  const dataFormateUpdate = (e) => {
    const formatDate = new Date(e.target.value).toLocaleDateString("en-GB");
    setEditVal({ ...editVal, endDate: formatDate });
    setIsEdit({ ...isEdit, endDate: false });
    updateTask(data._id, { endDate: formatDate });
  };
  return (
    <div className="taskCards">
      <div className="taskTilte">
        {isEdit.title ? (
          <input
            type="text"
            name="title"
            value={editVal.title}
            onChange={handleChange}
            onKeyDown={updteData}
          ></input>
        ) : (
          <>
            {" "}
            <p>{data.title}</p>
            <FontAwesomeIcon
              icon={faPenToSquare}
              onClick={() => UpdatingTitle("title")}
            />
          </>
        )}
      </div>
      <div className="taskStatus">
        {isEdit.taskStatus ? (
          <select
            name="taskStatus"
            value={editVal.taskStatus}
            className="selectStatus"
            onChange={handleChange}
            onKeyDown={updteData}
          >
            <option defaultValue="" disabled selected>
              Select Status
            </option>
            <option defaultValue="Not Started">Not Started</option>
            <option defaultValue="pending">Pending</option>
            <option defaultValue="completed">Completed</option>
          </select>
        ) : (
          <>
            {" "}
            <p>{data.taskStatus}</p>
            <FontAwesomeIcon
              icon={faPenToSquare}
              onClick={() => UpdatingTitle("taskStatus")}
            />
          </>
        )}
      </div>
      <div className="taskDate">
        {isEdit.endDate ? (
          <input
            type="date"
            name="endDate"
            value={editVal.endDate}
            onChange={handleChange}
            onKeyDown={dataFormateUpdate}
          ></input>
        ) : (
          <>
            <p>{data.endDate}</p>
            <FontAwesomeIcon
              icon={faPenToSquare}
              onClick={() => UpdatingTitle("endDate")}
            />
          </>
        )}
      </div>
      <button className="deleteBtn" onClick={() => deleteTask(data._id)}>
        Delete
      </button>
    </div>
  );
};

export default TaskCard;

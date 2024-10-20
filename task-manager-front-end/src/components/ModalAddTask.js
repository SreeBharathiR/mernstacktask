import React, { forwardRef } from "react";
import "./ModalAddTask.css";
const ModalAddTask = forwardRef(({ children }, ref) => {
  return <dialog ref={ref}>{children}</dialog>;
});
export default ModalAddTask;

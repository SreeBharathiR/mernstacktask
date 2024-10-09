const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const userRouter = require("./routes/UserRoutes");
const authRouter = require("./routes/AuthRoutes");
const errorHandler = require("./middleware/errorHandler");
const errorController = require("./middleware/errorController");
const { protect } = require("./middleware/authMiddleware");
const task = require("./routes/TaskRoutes");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
app.use(express.json());
dotenv.config();
app.use(cookieparser());
app.listen(process.env.PORT, () => {
  console.log("Server currently running");
});

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "server message",
//   });
// });

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to DB");
  } catch (e) {
    console.log("Unable to connect with DB");
  }
};
connectToDB();
app.use("/auth", authRouter);
app.use("/users", protect, userRouter);
app.use("/tasks", protect, task);
app.use(errorHandler);
app.use(errorController);

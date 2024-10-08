const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const signupRouter = require("./routes/signupRoutes");
const loginRouter = require("./routes/loginRoutes");
const app = express();
app.use(express.json());
dotenv.config();
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
app.use("/signup", signupRouter);
app.use("/user", loginRouter);

require("dotenv").config();
const cors = require("cors");
const express = require("express");

const connectDb = require("./db/connect");
const taskRoutes = require("./routes/tasks");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static("./public"));
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/tasks", taskRoutes);

connectDb(process.env.MONGODB_URL)
  .then(() => {
    app.listen(
      port,
      console.log(`Server is running on http://localhost:${port}`)
    );
  })
  .catch((err) => console.log(err));

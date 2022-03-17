const express = require("express");
const cors = require("cors");

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

app.listen(port, console.log(`Server is running on http://localhost:${port}`));

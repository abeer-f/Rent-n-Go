const express = require("express");
const app = express();
const path = require("path");
const apiRouter = require("./routes/api");

// statically serve everything in the build folder on the route '/build'
app.use("/build", express.static(path.resolve(__dirname, "../build")));

app.get("/", (req, res) => {
  return res.status(200).send("Hello World");
});

app.get("/get-cars", (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "application/javascript")
      .json({description: "Elantra"});
  } catch (e) {
    console.error(e);
  }
});

app.use("/api", apiRouter);

app.listen(3000); //listens on port 3000 -> http://localhost:3000/

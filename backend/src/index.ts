import express from "express";
import cors from "cors";
import router from "./routes";
import mongoose from "mongoose";
// importing contact schema
const path = require("path");
//

/* --------------------------- Connect to mongodb --------------------------- */
mongoose.connect(
  "mongodb://user1:user123@localhost:27017/contactlist?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
);
mongoose.connection.on("connected", () => {
  console.log("mongodb connected");
});

mongoose.connection.on("error", (err) => {
  console.log("error", err);
});
/* ------------------------------------ . ----------------------------------- */

const app = express();
// port no
const port = 3000;
// bind server to port

app.use(cors());
app.use(express.json());
app.use("/api", router);
// static files
app.use(express.static(path.join(__dirname, "public")));
// middleware
app.get("/", (req, res) => {
  res.send("foobar");
});

app.listen(port, () => {
  console.log("Server started on port: ", port);
});

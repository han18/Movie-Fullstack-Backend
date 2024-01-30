import "./loadEnv.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";

console.log(process.env.ATLAS_URI);

const app = express();
const PORT = process.env.PORT || 4000;

// middlewear
app.use(cors()); // allows frontend to connect to backend
app.use(morgan("dev")); // logger
app.use(express.json()); // for data in req.body
app.use(express.urlencoded({ extended: true })); // allow data in url string

app.get("/", (req, res) => {
  res.send("backend...");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

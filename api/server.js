import "dotenv/config";
import express from "express";
import cors from "cors";
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to server");
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Your Server is running in http://localhost:${PORT}`);
});

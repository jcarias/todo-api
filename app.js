import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index";
import cors from "cors";

// Set up the express app
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

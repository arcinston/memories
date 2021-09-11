import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/post.js";

const app = express();

app.use("/posts", postRoutes);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//using cloudatlas of mongodb
const CONNECTION_URL =
  "mongodb+srv://arcinston:asha5647@cluster0.l183h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  ) // using then() as mongoose.conecct() returns a promise if connection is successful
  .catch((e) => console.error(e)); // returns error if connection is unsuccessful

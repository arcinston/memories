import express from "express";

const router = express.Router();

router.get("/", (req, resp) => {
  // this is only reached on localhost:5000/posts
  resp.send("this works!!!");
});

export default router;

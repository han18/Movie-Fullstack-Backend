//this is to add users route to the frontend for login and signup
import { Router } from "express";

const router = new Router();

// sign in users to watch movies
router.post("/signin", async (req, res) => {
  //check if user exist, then check if password is a match
  // send the db to the user to serf the movies
  const user = { _id: "1", email: "alex@gmail", userName: "alex123" };
  res.json();
});

// sign up user to watch movies
router.post("/signup", async (req, res) => {
  // check email is not in db, create a new user
  // send the new user
  const user = { _id: "1", email: "alex@gmail", userName: "alex123" };
  res.json();
});

export default router;

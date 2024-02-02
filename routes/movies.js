import { Router } from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = new Router();

// creating a GET request
router.get("/", async (req, res) => {
  try {
    const collection = await db.collection("movies");

    const movies = await collection.find().limit(10).toArray();
    // to limit the movies routing but used the limit
    const topTen = movies.slice(0, 11);
    res.status(200).json(movies);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const collection = await db.collection("movies");
    const query = new ObjectId(req.params.id);
    const movie = await collection.findOne({ _id: query });

    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
  }
});

export default router;

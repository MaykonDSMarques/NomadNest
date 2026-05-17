import { Router } from "express";
import Place from "./models.js";
import { JWTVerify } from "../../utils/jwtVerify.js";
import { connectDb } from "../../config/db.js";

const router = Router();

router.post("/", async (req, res) => {
  connectDb();
  const {
    title,
    city,
    photos,
    description,
    extras,
    price,
    perks,
    checkin,
    checkout,
    guests,
  } = req.body;
  try {
    const { _id: owner } = await JWTVerify(req);
    const newplaceDoc = await Place.create({
      owner,
      title,
      city,
      photos,
      description,
      extras,
      price,
      perks,
      checkin,
      checkout,
      guests,
    });
    res.json(newplaceDoc);
  } catch {
    console.error(error);
    res.status(500).json("Erroe when creating a new place", error);
  }
});

export default router;

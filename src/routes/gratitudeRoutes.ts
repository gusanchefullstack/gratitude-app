import { Router } from "express";
import {
  getGratitudes,
  getUniqueGratitude,
  createGratitude,
  updateGratitude,
  deleteGratitude,
} from "#controllers/gratitudeController.js";

const gratitudeRouter = Router();

gratitudeRouter.get("/", getGratitudes);
gratitudeRouter.get("/:id", getUniqueGratitude);
gratitudeRouter.post("/", createGratitude);
gratitudeRouter.put("/:id", updateGratitude);
gratitudeRouter.delete("/:id", deleteGratitude);

export default gratitudeRouter;

import { Request, Response, NextFunction } from "express";
import { Gratitude, gratitudesList } from "#models/gratitude.js";

export const createGratitude = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const gratitude: Gratitude = req.body;
    gratitudesList.push(gratitude);
    res.status(201).json(gratitude);
  } catch (error) {
    next(error);
  }
};

export const getGratitudes = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(gratitudesList);
  } catch (error) {
    next(error);
  }
};

export const getUniqueGratitude = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const gratitude = gratitudesList.find((item) => item.id === id);
    if (!gratitude) {
      res.status(404).json({ message: "Gratitude not found" });
      return;
    }
    res.json(gratitude);
  } catch (error) {
    next(error);
  }
};

export const updateGratitude = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const gratitudeIndex = gratitudesList.findIndex((item) => item.id === id);
    if (gratitudeIndex === -1) {
      res.status(404).json({ message: "Gratitude not found" });
      return;
    }
    const gratitude = gratitudesList[gratitudeIndex];
    gratitudesList[gratitudeIndex] = { ...gratitude, ...data };
    res.json(gratitude);
  } catch (error) {
    next(error);
  }
};

export const deleteGratitude = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const index = gratitudesList.findIndex((item) => item.id === id);
    if (index === -1) {
      res.status(404).json({ message: "Gratitude not found" });
      return;
    }
    const deletedGratitude = gratitudesList.splice(index, 1)[0];
    res.json(deletedGratitude);
  } catch (error) {
    next(error);
  }
};

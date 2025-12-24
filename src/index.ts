import express from "express";
import config from "#config/config.js";
import gratitudeRouter from "#routes/gratitudeRoutes.js";
import { errorHandler } from "#middleware/errorHandler.js";

const app = express()
const port = config.port

app.use(express.json())
app.use("/api/gratitude", gratitudeRouter);

app.use(errorHandler)

app.listen(3000, () => {
    console.log(`Example app listening on port ${port}`);
})
import express from "express";
import "./models/associations.js";
import categoryRouter from "./routes/categoryRouter.js";
import orderRouter from "./routes/orderRouter.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/categories", categoryRouter);
app.use("/orders", orderRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

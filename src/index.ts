import "dotenv/config";
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";

import connectToDb from "./utils/db.connect";
import { bookRouter } from "./routes/book.route";
import notFound from "./middlewares/pageNotFound";

const port: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/books", bookRouter);

app.use(notFound);

app.listen(port, () => {
    connectToDb();
    console.log(`listening in: http://localhost:${port}`);
});

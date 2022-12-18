import { Router } from "express";

import * as BookController from "../controllers/book.controller";
import validateRequest from "../middlewares/validateRequest";
import {
    createBookSchema,
    editBookSchema,
    getBookSchema,
} from "../schema/book.schema";

export const bookRouter = Router();

bookRouter.get("/", BookController.listAllController);

bookRouter.post(
    "/create",
    validateRequest(createBookSchema),
    BookController.createBookController
);

bookRouter.get(
    "/:id",
    validateRequest(getBookSchema),
    BookController.getOneBookController
);

bookRouter.put(
    "/update/:id",
    validateRequest(editBookSchema),
    BookController.editBookController
);

bookRouter.delete(
    "/delete/:id",
    validateRequest(getBookSchema),
    BookController.deleteBookController
);

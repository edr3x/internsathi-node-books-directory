import { Request, Response } from "express";

import {
    CreateBookInput,
    EditBookInput,
    GetBookInput,
} from "../schema/book.schema";
import * as BookService from "../services/book.service";

export const listAllController = async (_req: Request, res: Response) => {
    try {
        const books = await BookService.listAllBooks();
        return res.status(200).json({ success: true, data: books });
    } catch (e: any) {
        res.status(500).json({ success: false, error: e.message });
    }
};

export const createBookController = async (
    req: Request<{}, {}, CreateBookInput>,
    res: Response
) => {
    const body = req.body;
    try {
        const book = await BookService.createBook(body);

        return res.status(200).json({ success: true, data: book });
    } catch (e: any) {
        return res.status(500).json({ success: false, error: e.message });
    }
};

export const getOneBookController = async (
    req: Request<GetBookInput>,
    res: Response
) => {
    const id = req.params.id;

    try {
        const book = await BookService.getOneBook(id);

        return res.status(200).json({ success: true, data: book });
    } catch (e: any) {
        return res.status(500).json({ success: false, error: e.message });
    }
};

export const editBookController = async (
    req: Request<EditBookInput["params"], {}, EditBookInput["body"]>,
    res: Response
) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const findBook = await BookService.getOneBook(id);

        if (!findBook)
            return res
                .status(404)
                .json({ status: false, error: "Can't find the Book" });

        findBook.set(body);

        const updatedBook = await findBook.save();

        return res.status(200).json({ success: true, data: updatedBook });
    } catch (e: any) {
        return res.status(500).json({ success: false, error: e.message });
    }
};

export const deleteBookController = async (
    req: Request<GetBookInput>,
    res: Response
) => {
    const id = req.params.id;

    try {
        const book = await BookService.deleteBook(id);

        return res.status(200).json({
            success: true,
            data: { "Deletion Successful": book },
        });
    } catch (e: any) {
        return res.status(500).json({ success: false, error: e.message });
    }
};

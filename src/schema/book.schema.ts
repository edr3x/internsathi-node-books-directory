import { object, string, TypeOf } from "zod";

export const createBookSchema = object({
    body: object({
        title: string({
            required_error: "Book Title is required",
        }),

        author: string({
            required_error: "Author name is required",
        }),

        datePublished: string({
            required_error: "Published Date is required",
        }),

        genre: string({
            required_error: "Genre is required",
        }),
    }),
});

export const getBookSchema = object({
    params: object({
        id: string(),
    }),
});

export const editBookSchema = object({
    params: object({
        id: string(),
    }),
    body: object({
        title: string({
            required_error: "Book Title is required",
        }),

        author: string({
            required_error: "Author name is required",
        }),

        datePublished: string({
            required_error: "Published Date is required",
        }),

        genre: string({
            required_error: "Genre is required",
        }),
    }),
});

export type CreateBookInput = TypeOf<typeof createBookSchema>["body"];

export type GetBookInput = TypeOf<typeof getBookSchema>["params"];

export type EditBookInput = TypeOf<typeof editBookSchema>;

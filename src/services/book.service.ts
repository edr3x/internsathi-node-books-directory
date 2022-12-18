import BookModel, { Book } from "../models/book.model";

export function listAllBooks() {
    return BookModel.find();
}

export function createBook(input: Partial<Book>) {
    return BookModel.create(input);
}

export function getOneBook(id: string) {
    return BookModel.findById(id);
}

export function updateBook(id: string, input: Partial<Book>) {
    return BookModel.findByIdAndUpdate(id, input);
}

export function deleteBook(id: string) {
    return BookModel.findByIdAndDelete(id);
}

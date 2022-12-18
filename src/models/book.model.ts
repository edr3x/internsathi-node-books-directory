import {
    getModelForClass,
    modelOptions,
    prop,
    Severity,
} from "@typegoose/typegoose";

@modelOptions({
    schemaOptions: {
        timestamps: true,
    },
    options: {
        allowMixed: Severity.ALLOW,
    },
})
export class Book {
    @prop({ required: true })
    title: string;

    @prop({ required: true })
    author: string;

    @prop({ required: true })
    datePublished: string;

    @prop({ required: true })
    genre: string;
}

const BookModel = getModelForClass(Book);

export default BookModel;

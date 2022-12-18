import mongoose from "mongoose";

import { config } from "../const/config";

async function connectToDb() {
    const dbUri: string = config.prodMongo.url;

    try {
        await mongoose.connect(dbUri);
        console.log("Connected to DB");
    } catch (e: any) {
        console.log("Failed to connect to DB");
        process.exit(1);
    }
}

export default connectToDb;

import "dotenv/config";

const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_URL_PROD = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.k8uny.mongodb.net/?retryWrites=true&w=majority`;
const MONGO_URL_DEV = "mongodb://author:rxyy@0.0.0.0:27017/";

export const config = {
    prodMongo: { url: MONGO_URL_PROD },
    devMongo: { url: MONGO_URL_DEV },
};

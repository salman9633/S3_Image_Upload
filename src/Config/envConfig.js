import dotenv from "dotenv";
dotenv.config();


export const {
    S3_BUCKET_NAME,
    S3_BUCKET_REGION,
    S3_SECRET_ACCESS_KEY,
    S3_ACCESS_KEY_ID
 } = process.env
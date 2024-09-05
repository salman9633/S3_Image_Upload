import { S3Client } from '@aws-sdk/client-s3'
import { S3_BUCKET_REGION, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY } from './envConfig.js'


const s3Client = new S3Client({
    region: S3_BUCKET_REGION,
    credentials: {
        accessKeyId: S3_ACCESS_KEY_ID,
        secretAccessKey: S3_SECRET_ACCESS_KEY
    }
})

export default s3Client
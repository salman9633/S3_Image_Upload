
import { PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import s3Client from '../Config/s3Config';
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

class S3Functions {

    static async imageUpload(details,urlType) {
        const command = new PutObjectCommand(details)
        const getImg = new GetObjectCommand(details)

        let url
        try {
             await s3Client.send(command)
             url = await getSignedUrl(s3Client, getImg, { expiresIn: 7 * 24 * 60 * 60 })
             console.log({ url });
        } catch (error) {
             throw new Error(error)
        }
        return url
    }
}

export default S3Functions

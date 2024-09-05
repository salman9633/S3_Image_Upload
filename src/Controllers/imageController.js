import { S3_BUCKET_NAME } from "../Config/envConfig";
import S3Functions from "../Service/s3Function";

const imageController = {

    async uploadImagePreSignedUrl(req, res, next) {

        try {

            const image = req?.file

            if (!image) {
                return res.status(404).send('Please upload an image')
            }

            //remove all unwanted characters & spaces from the file name 
            //concat with date rage for uniqueness
            let fileName = `${Date.now()}${image.originalname}`.replace(/\s/g, "");
            let details = {
                Bucket: S3_BUCKET_NAME,
                Key: `products/${fileName}`,
                Body: image.buffer,
                ContentType: image.mimetype,
            }

            let response = await S3Functions.imageUpload(details);

            return res.status(200).json({
                message: 'Image uploaded successfully',
                data: response
            })
        } catch (error) {
            console.log({ error })
        }
    },
    async uploadImageObjUrl(req, res, next) {

        try {

            const image = req?.file

            if (!image) {
                return res.status(404).send('Please upload an image')
            }

            //remove all unwanted characters & spaces from the file name 
            //concat with date rage for uniqueness
            let fileName = `${Date.now()}${image.originalname}`.replace(/\s/g, "");
            let details = {
                Bucket: S3_BUCKET_NAME,
                Key: `products/${fileName}`,
                Body: image.buffer,
                ContentType: image.mimetype,
            }

            let response = await S3Functions.imageUpload(details);

            return res.status(200).json({
                message: 'Image uploaded successfully',
                data: response
            })
        } catch (error) {
            console.log({ error })
        }
    }
}

export default imageController
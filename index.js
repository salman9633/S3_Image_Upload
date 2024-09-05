import express from 'express'
import multer from "multer";
import imageController from './src/Controllers/imageController';



const app = express()
const port = 5000
const storage = multer.memoryStorage()
export const upload = multer({
    storage
})

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.post('/upload-image-pre-signed-url', upload.single('image'), imageController.uploadImagePreSignedUrl)
app.post('/upload-image-obj-url', upload.single('image'), imageController.uploadImagePreSignedUrl)

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})


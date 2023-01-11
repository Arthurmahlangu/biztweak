const { v4: uuidv4 } = require('uuid');
const path = require("path")

const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

module.exports = async (file, destination, mimetypes = [], size = null) => {
    try {
        if (file) {
            const currentTime = new Date().getTime()
            
            const ext = path.extname(file.name)
            const randomName = uuidv4()
            const fileName = `${currentTime}_${randomName}${ext}`

            const uploadPath = `./storage/${destination}/${fileName}`
            const downloadPath = `${process.env.UPLOAD_URL}${destination}/${fileName}`
            
            if (mimetypes.length > 0) {
                if (!mimetypes.includes(file.mimetype)) {
                    throw new Error('Invalid file type.')
                }
            }
            
            if (size != null ) {
                if (file.size > size) {
                    throw new Error(`File size is greater than default allowed size of ${size}`)
                }
            }

            console.log(file)
            await file.mv(uploadPath)

            return {
                error: false,
                data: downloadPath
            }

        }

        throw new Error('File not found.')
        
    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}
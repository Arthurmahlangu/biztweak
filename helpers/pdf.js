const PdfPrinter = require('pdfmake')
const { v4: uuidv4 } = require('uuid');
const printer = new PdfPrinter({});
const fs = require('fs')

const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

module.exports = async (docDefinition, options) => {
    try {
        const currentTime = new Date().getTime()
        const randomName = uuidv4()
        const fileName = `${currentTime}_${randomName}.pdf`
        const uploadPath = `./storage/reports/${fileName}`
        const downloadPath = `${process.env.UPLOAD_URL}${destination}/${fileName}`
        
    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}
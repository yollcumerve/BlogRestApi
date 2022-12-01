const app = require('express')();
const port = 8080
const { json, urlencoded } = require("body-parser");
const multer = require('multer')



app.use(json({ limit: "100kb" }));
app.use(urlencoded({ limit: "100kb", extended: true }));

const storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null, 'images')
    },
    filename: (req,gile,cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({storage:storage})
//İ'm going to indicate my configuration

app.post('/api/upload', upload.single('file', (req,res) => {
    res.status(200).json('File has been uploaded')   //when ypu test in postman, body/formdata, key= file (you add it)
}))


app.use(require("./routes/main"));

app.listen(port, () => {
    console.log('----------')
    console.log(`Backend listen port: ${port} `)
    console.log('----------')
})
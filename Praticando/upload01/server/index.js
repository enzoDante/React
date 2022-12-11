const express = require('express');
const app = express();
const multer = require('multer')
const cors = require('cors');

app.use(cors())

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public') //pasta de upload
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +file.originalname )
    }
})

var upload = multer({ storage: storage }).single('file')


app.post('/upload',function(req, res) {
     
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        }
        else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)

    })

});


app.listen(8081, function(){
    console.log('teste na portaaa')
})
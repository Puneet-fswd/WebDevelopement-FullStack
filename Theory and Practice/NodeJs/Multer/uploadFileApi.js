const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer(
    {
        storage: multer.diskStorage(
            {
                destination: function(req, file, cb)
                {
                    cb(null, "demofilesAddedByMulter");
                },
                filename: function(req, file, cb)
                {
                    cb(null, file.fieldname+"-"+Date.now()+".txt");
                }
            })
    }).single("sample_text");   //sample_text is the key name in postman

app.post("/upload", upload, (req, res) =>
{
    res.send('i am working');
});

app.listen(80);
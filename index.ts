import express from 'express';
import * as path from "path";
import bodyParser from "body-parser";
import  fs from "fs";
const app = express();
app.use(bodyParser.json());
app.get('/haha',(req, res, next)=>{
    fs.promises.readFile('one.txt')
        .then(data => res.send(data))
        .catch(err=>next(err))
    // let data = fs.readFileSync('one.txt' , 'utf-8');
    // res.send(data)
})
app.use((err, req, res, next)=>{//tạo 1 application-level middleware để xử lý lỗi.
    console.log('Error 1111: ',err.type);
    if(err.type=='time-out') res.status(408).send(err)
    else
        res.status(500).send(err)
})
app.listen(3000,()=>{
    console.log(' ok http://lolcalhost:3000')
})
const express = require("express");
const bodyParser = require("body-parser");
var nedb = require('nedb');
var db = new nedb({filename: 'chat.db', autoload: true});
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000'
}


const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit : '200kb' }));





app.post("/", async (req, res) => {

  let msg = req.body;

  await db.insert(msg, function(err){
    if(err)return console.log(err);
   
    console.log("Nova Mensagem enviada");
   });

   res.send('Mensagem enviada!');
   res.end();
});

app.get("/", async (req, res) => {

  let msgList;

  await db.find({ messageType: 'normal' }).sort({ datetime: 1 }).exec((err, messages) => {

    if(err)return console.log(err);

    msgList = messages;
    res.send(msgList);
    res.end();

  });

  

});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
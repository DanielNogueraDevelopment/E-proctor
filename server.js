var express = require("express")
const bodyParser = require("body-parser");
app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))



var rooms = [];
//every element in rooms is a object with a p and a array with users.

//signalling server
app.post("/ss/reloadroom", function(req, res) {
    res.json(rooms[req.body].users);
    rooms[req.body].users = [];
});
app.post("/ss/joinroom", function(req, res) {
    rooms[req.body.room].users.push(req.body.key)
    res.json(rooms[req.body].p);
});
app.post("/ss/createroom", function(req, res) {
    rooms[req.body.room].p = req.body.key;
    res.json(true);
});
app.post("/ss/getroom", function(req, res) {
    res.json(rooms[req.body].p);
});



app.use(express.static("public"));





//If you go to localhost://3000 ON YOUR COMPUTER it should be the server.


//http://localhost:3000/index.html
//all html files in the public folder are automatically hosted


//http://localhost:3000/index.html
//all html files in the public folder are automatically hosted
app.listen(3000);
var express = require("express")
const bodyParser = require("body-parser");
app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))



var rooms = [];
//every element in rooms is a object with a p and a array with users.

//signalling server
app.post("/ss/reloadroom", function(req, res) {
    if (rooms[Number(req.body.room)]) {
        res.json(rooms[Number(req.body.room)].users);
        rooms[Number(req.body.room)].users = [];
    } else {
        res.json(false);
    }

});
app.post("/ss/joinroom", function(req, res) {

    rooms[req.body.room].users.push(req.body.key)
    res.json(rooms[req.body.room].p);
});
app.post("/ss/createroom", function(req, res) {
    console.log("room created")
    rooms[req.body.room] = { p: req.body.key, users: [] };
    res.json(true);
});
app.post("/ss/getroom", function(req, res) {
    res.json(rooms[req.body.room].p);
});



app.use(express.static("public"));
setInterval(function() { console.log(rooms) }, 10000)


//WE ARE NOW USING LOCALHOST://8080

//If you go to localhost://8080 ON YOUR COMPUTER it should be the server.


//http://localhost:8080/index.html
//all html files in the public folder are automatically hosted



app.listen(8080);
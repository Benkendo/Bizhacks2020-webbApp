var express		= require("express"),
    app			= express();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const fetch = require("node-fetch");

const normalizePort = require('normalize-port');
var port = normalizePort(process.env.PORT || '3000');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

var score = 100;
const users = ["leo","khan","cindy","kevin","hamza"];
var points;

fetch('http://127.0.0.1:8000/points')
  .then((response) => {

    return response.json();
  })
  .then((myJson) => {
      points = myJson;
  }).catch((err)=>console.log(err));

// var request = new XMLHttpRequest()
//
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
// request.onload = function(response) {
//   // Begin accessing JSON data here
//   var data = JSON.parse(response)
//
//   if (request.status >= 200 && request.status < 400) {
//     console.log(data);
//   } else {
//     console.log('error')
//   }
// }
// request.send()

app.get("/",(req,res)=>{
	res.render("landing");
});

app.get("/index",(req,res)=>{
    res.render("index",{score:score}); 
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.post("/login",urlencodedParser,(req,res)=>{
    var searchname = req.body.username;
        function findIndex(searchname){
            for(var i=0; i<users.length; i++){
                if(searchname == users[i]){
                    return i+1;
                }
            }
            return null;
        }
        function finduser(searchname){
            var searched = 0;
            for(var i=0; i<users.length; i++){
                if(searchname == users[i]){
                    searched = 1;
                }
            }
            return searched;
        }
        async function search(searchname, points){
            const searched = await finduser(searchname);
                var userIndex = await findIndex(searchname);
                var score = points[userIndex];
                if(searched == 1){
                    res.render("index",{score:score});
                }
                else{
                    res.redirect("login");
                }
        }
        search(searchname, points);
});

app.get("/myrewards",(req,res)=>{
	res.render("myrewards");
});

app.get("/myaccount",(req,res)=>{
    res.render("myaccount")
})

app.listen(port, process.env.IP, function(){
   console.log("The Server Has Started!");
});
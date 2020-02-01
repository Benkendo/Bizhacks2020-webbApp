var express		= require("express"),
    app			= express();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const normalizePort = require('normalize-port');
var port = normalizePort(process.env.PORT || '3000');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

var score = 100;
const users = ["leo","khan","cindy","kevin","hamza"];

// fetch('127.002.10')
// .then((response)=>{
//     return response.json();
// })
// .then();

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
                    return i;
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
        async function search(searchname){
            const searched = await finduser(searchname);
                var userIndex = findIndex(searchname);
                if(searched == 1){
                    res.render("index",{userIndex:userIndex});
                }
                else{
                    res.redirect("login");
                }
        }
        console.log(findIndex(searchname));
        search(searchname);
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
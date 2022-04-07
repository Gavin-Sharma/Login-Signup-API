const app = require('express')(); 
const basicAuth = require('express-basic-auth');
const bodyParser = require('body-parser'); // middleware
app.use(bodyParser.urlencoded({ extended: false }));

const credentials = [ {'admin': 'pwd'}, {'root': 'p@ssword'},{'sam': 'abc'}, {'bob': 'xyz'}];


app.get('/', function(request, response){ 
    response.sendFile(__dirname + '/index.html') //reposond by send a static file of index.htmls
});

app.get('/login', function(request, response){ 
    response.sendFile(__dirname + '/login.html') //reposond by send a static file of index.htmls
});

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    //console.log(credentials)




app.use(basicAuth( { authorizer: myAuthorizer } ))

function myAuthorizer(username, password) {
    for (i of credentials){
        for (let key in i) {
            const userMatches = basicAuth.safeCompare(username, key); //this is the key in the dict
            const passwordMatches = basicAuth.safeCompare(password, i[key]); // this is the value of the dict
            if (userMatches & passwordMatches){ //check if condition and if true return and if not just continue looping
                return (userMatches & passwordMatches);
            }
        }
    }
}


    if (myAuthorizer(username, password)) {
        res.send('secret message that only auth\'d users can see\n')
    } else { res.send('You are not a user') }


});

app.post('/', (req, res) =>{
    let newUsername = req.body.username;
    let newPassword = req.body.password;

    var key = newUsername;
    var obj = {};
    obj[key] = newPassword;
    credentials.push(obj);

    res.sendFile(__dirname + '/login.html') //reposond by send a static file of index.htmls
})



app.listen(8080); 
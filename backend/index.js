const express = require("express");
const session = require("express-session");

const app = express();
const user = express.Router()

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));

// routes not requiring authorization
app.post('/login', (req, res) => {


    console.log("BODY:", req.body)

    const { username, password } = req.body;
    
    if (!username || !password) {
        res.status(400).send({
            error: "Missing username or password"
        });
    
    } else if (username != "bob" || password != "123") {
        res.status(400).send({
            error: "Invalid credentials"
        });
    } else {
        res.send("All good!")
    }
});

// make sure client is logged in
user.use(function(req, res, next) {
    if (!req.session.loggedIn) {
        res.status(401).end()
    } else {
        next();
    }
});

// test code
user.post('/test', (req, res) => {
    if (!req.body.code || ! req.body.language) {
        res.status(400).send({ error: "Missing code or language" });
        return;
    }
    res.send("ok")
});

app.listen(3000);
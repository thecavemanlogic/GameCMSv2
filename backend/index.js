const express = require("express");
const session = require("express-session");

const app = express();
const user = express.Router()

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));

app.use(express.json());

// routes not requiring authorization
app.post('/api/login', (req, res) => {
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
        res.cookie('token', ';sdlkfj;askdjf;ksdjfa;sdjfdksjf')
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
user.post('/api//test', (req, res) => {
    if (!req.body.code || ! req.body.language) {
        res.status(400).send({ error: "Missing code or language" });
        return;
    }
    res.send("ok")
});

app.listen(3001);
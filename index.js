const Express = require("express");

const app = Express();

app.get('/', (req, res) => {
    res.send('HI!')
});

app.listen(3000);
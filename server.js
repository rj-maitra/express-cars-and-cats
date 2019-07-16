const express = require('express'),
         port = 8000,
          app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/cars", (req, res) => {
    res.sendFile(__dirname + "/views/cars.html")
})

app.get("/cats", (req, res) => {
    res.sendFile(__dirname + "/views/cats.html")
})

app.get("/form", (req, res) => {
    res.sendFile(__dirname + "/views/form.html")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
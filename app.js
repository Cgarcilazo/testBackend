
var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/tutorial")(app);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const port = 3000;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});


let express = require("express");
let app = express();

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

absolutePath = __dirname + '/public';

app.use(express.static(absolutePath));

// app.get("/", (req, res) => {
//     res.sendFile(absolutePath);
// } )

module.exports = app;

//
// CONFIG
//

var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 4000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//
// ROUTES
//

app.get('/', (req, res) => {
    res.send(`
    <html>
        <head>
        </head>
        <body>
            <h1>Welcome to the pre-handlebars test page!</h1>
        </body>
    </html>
    `);
});


//
// SERVER
//

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


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

var icecreams = [
    { name: 'vanilla', price: 10, awesomeness: 3 },
    { name: 'chocolate', price: 4, awesomeness: 8 },
    { name: 'banana', price: 1, awesomeness: 1 },
    { name: 'greentea', price: 5, awesomeness: 7 },
    { name: 'jawbreakers', price: 6, awesomeness: 2 },
];


app.get("/icecream/:name", function (req, res) {
    var chosen_ice_cream = req.params.name;
    // res.send(`You picked ${chosen_ice_cream}`);
    res.render("icecream", {flavor: chosen_ice_cream});
});


//
// SERVER
//

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

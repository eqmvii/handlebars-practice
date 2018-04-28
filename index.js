
//
// CONFIG
//

var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 4000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const ICECREAMS = [
    { name: 'vanilla', price: 10, awesomeness: 3 },
    { name: 'chocolate', price: 4, awesomeness: 8 },
    { name: 'banana', price: 1, awesomeness: 1 },
    { name: 'greentea', price: 5, awesomeness: 7 },
    { name: 'jawbreakers', price: 6, awesomeness: 2 },
];

//
// ROUTES
//

// app.get('/', (req, res) => {
//     res.send(`
//     <html>
//         <head>
//         </head>
//         <body>
//             <h1>Welcome to the pre-handlebars test page!</h1>
//             <p><a href="/icecream/chocolate">Chocolate</a></p>
//             <p><a href="/icecream/banana">banana</a></p>
//             <p><a href="/newindex">New Index</a></p>
//         </body>
//     </html>
//     `);
// });

app.get('/', (req, res) => {
    res.render("index", {ICECREAMS: ICECREAMS});
});




app.get("/icecream/:name", function (req, res) {
    var chosen_ice_cream = req.params.name;
    for (let i = 0; i < ICECREAMS.length; i++) {
        if (chosen_ice_cream.toLowerCase() === ICECREAMS[i].name) {
            res.render("icecream", ICECREAMS[i]);
            return;
        }
    }
    res.render("noicecream");
});


//
// SERVER
//

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

//Server setting and start
var express = require("express");
var port = process.env.PORT || 3000;
var app = express();
var path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// how to add resources to your HTML. Stack Overflow for the win!
app.use( express.static( "app" ) );
app.use("/images", express.static(__dirname + "./public/images"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port, function() {
    console.log("Hearts warming on http://localhost:" + port);
});

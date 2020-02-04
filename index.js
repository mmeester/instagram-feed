// for reference on this build: https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
require('dotenv').config();

var express = require("express"); // call express
var app = express(); // define our app using express
var cors = require("cors");

let Instagram = require("./functions/instagram.js");

// add CORS
if (process.env.NODE_ENV === "production") {
	var whitelist = [
		"http://localhost:3000",
		"http://127.0.0.1:3000",
		process.env.WHITELIST
	];
	app.use(
		cors({
			origin: whitelist
		})
	);
}
app.use(cors());

var port = process.env.PORT || 9001;
var router = express.Router();

router.get("/", function(req, res) {
	res.json({
		message: "Instagram feed"
	});
});

// Instagram
router.route("/instagram/feed").get(Instagram.getFeed);

// REGISTER ROUTES
app.use("/", router);

// START THE SERVER
// =============================================================================
app.listen(port);

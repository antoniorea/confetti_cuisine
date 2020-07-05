"use strict";

const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");
const express = require("express");
const app = express();
const layouts = require("express-ejs-layouts");
app.set("view engine", "ejs");
app.use(layouts);
// Adding body parsing
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

//Port 3000
app.set("port", process.env.PORT || 3000);
// Serving static views
app.use(express.static("public"));
// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Confetti Cuisine!");    
});
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

//Server listen in port 3000
app.listen(app.get("port"), () => {
    console.log(
        `Server running at http://localhost:${app.get("port")}`
    );
});

    
 
    
    



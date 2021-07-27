"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var LandingPage_1 = require("./home/LandingPage");
var AboutUs_1 = require("./home/AboutUs");
var Testimonials_1 = require("./home/Testimonials");
var core_1 = require("@material-ui/core");
var Steps_1 = require("./home/Steps");
var Footer_1 = require("layouts/Footer");
var WhyFoodie_1 = require("./home/WhyFoodie");
var useStyles = core_1.makeStyles(function (theme) {
    return core_1.createStyles({
        root: {
            padding: '0 1rem'
        }
    });
});
var Home = function () {
    var styles = useStyles();
    return (React.createElement("div", null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Foodie"),
            React.createElement("meta", { name: 'description', content: 'Discover foods by ingredients in Foodie!' }),
            React.createElement("link", { rel: 'icon', href: '/favicon.ico' })),
        React.createElement("main", { className: styles.root },
            React.createElement(LandingPage_1["default"], null),
            React.createElement(AboutUs_1["default"], null),
            React.createElement(Steps_1["default"], null),
            React.createElement(WhyFoodie_1["default"], null),
            React.createElement(Testimonials_1["default"], null),
            React.createElement(Footer_1["default"], null))));
};
exports["default"] = Home;

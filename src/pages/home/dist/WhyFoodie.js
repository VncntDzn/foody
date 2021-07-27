"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var image_1 = require("next/image");
var Fastfood_1 = require("@material-ui/icons/Fastfood");
var vegetables_jpg_1 = require("assets/whyfoodie/vegetables.jpg");
var Reasons_1 = require("utils/data/Reasons");
var useStyles = core_1.makeStyles(function (theme) {
    var _a, _b, _c;
    return core_1.createStyles({
        root: (_a = {
                position: "relative",
                height: "50vh",
                margin: "0 -1rem",
                color: "white"
            },
            _a[theme.breakpoints.up("sm")] = {
                height: "30vh",
                margin: "2rem -1rem"
            },
            _a[theme.breakpoints.up("lg")] = {
                height: "35vh"
            },
            _a),
        image: (_b = {
                height: "50vh",
                position: "absolute",
                zIndex: -1,
                bottom: 0,
                left: 0,
                right: 0
            },
            _b[theme.breakpoints.up("sm")] = {
                height: "25vh"
            },
            _b[theme.breakpoints.up("lg")] = {
                height: "35vh"
            },
            _b),
        textsContainer: (_c = {},
            _c[theme.breakpoints.up("md")] = {
                padding: "0 7rem"
            },
            _c[theme.breakpoints.up("lg")] = {
                padding: "0 13rem"
            },
            _c),
        reasonStyle: {
            fontSize: "clamp(1rem, 4.5vw, 1.4rem)"
        }
    });
});
var WhyFoodie = function () {
    var styles = useStyles();
    return (React.createElement(core_1.Grid, { className: styles.root },
        React.createElement("div", { style: { textAlign: "center", paddingTop: "2rem" } },
            React.createElement(core_1.Typography, { variant: "h4" }, " -- WHY FOODIE -- "),
            React.createElement(core_1.Typography, { color: "primary" }, "THE BENEFITS OF USING FOODIE")),
        React.createElement(core_1.Grid, { className: styles.textsContainer, container: true, alignItems: "center", justify: "center" }, Reasons_1["default"].map(function (_a) {
            var id = _a.id, reason = _a.reason;
            return (React.createElement(core_1.Grid, { container: true, item: true, direction: "row", alignItems: "center", key: id },
                React.createElement(core_1.IconButton, { color: "primary" },
                    React.createElement(Fastfood_1["default"], null)),
                React.createElement(core_1.Typography, { variant: "subtitle1", className: styles.reasonStyle }, reason)));
        })),
        React.createElement("div", { className: styles.image },
            React.createElement(image_1["default"], { src: vegetables_jpg_1["default"], alt: "Vegetables", layout: "fill", objectFit: "cover", quality: 100 }))));
};
exports["default"] = WhyFoodie;

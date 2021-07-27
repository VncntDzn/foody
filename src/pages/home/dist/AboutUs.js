"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var MainLayout_1 = require("layouts/MainLayout");
var image_1 = require("next/image");
var Slice_jpg_1 = require("assets/home/Slice.jpg");
var useStyles = core_1.makeStyles(function (theme) {
    var _a, _b, _c;
    return core_1.createStyles({
        root: (_a = {
                marginTop: '3rem',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            },
            _a[theme.breakpoints.up('lg')] = {
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            },
            _a),
        image: (_b = {
                width: '100%'
            },
            _b[theme.breakpoints.up('md')] = {
                height: '25rem'
            },
            _b),
        cardContainer: (_c = {
                textAlign: 'justify',
                borderRadius: '10px',
                marginTop: '1rem'
            },
            _c[theme.breakpoints.up('sm')] = {
                width: '30rem'
            },
            _c)
    });
});
var AboutUs = function () {
    var styles = useStyles();
    return (React.createElement(MainLayout_1["default"], null,
        React.createElement(core_1.Grid, { className: styles.root },
            React.createElement(core_1.Hidden, { mdDown: true },
                React.createElement("div", { style: { width: '35vw', borderRadius: '30px' } },
                    React.createElement(image_1["default"], { src: Slice_jpg_1["default"], alt: 'Vincent', layout: 'responsive', quality: 100 }))),
            React.createElement("div", null,
                React.createElement("div", { style: { textAlign: 'center' } },
                    React.createElement(core_1.Typography, { variant: 'h4' }, " -- ABOUT US -- "),
                    React.createElement(core_1.Typography, { color: 'primary' }, "MAKE YOUR FOOD EASILY")),
                React.createElement(core_1.Card, { className: styles.cardContainer, raised: true },
                    React.createElement(core_1.Hidden, { lgUp: true },
                        React.createElement(core_1.CardMedia, { className: styles.image, component: 'img', title: 'Slice', image: Slice_jpg_1["default"].src })),
                    React.createElement(core_1.CardContent, null,
                        React.createElement("p", null, "Foodie was built to help every person in the world that struggles to find their meal ingredients."),
                        React.createElement("p", null, "Here in Foodie, we gathered every possible meal ingredients around the world and all you have to do is to search them."),
                        React.createElement("p", null, "Eat clean food, feel great about cooking and eat delicious foods at your own home.")))))));
};
exports["default"] = AboutUs;

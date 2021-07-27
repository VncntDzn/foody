"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var MainLayout_1 = require("layouts/MainLayout");
var image_1 = require("next/image");
var Food_jpg_1 = require("assets/home/Food.jpg");
var useStyles = core_1.makeStyles(function (theme) {
    var _a, _b, _c;
    return core_1.createStyles({
        root: (_a = {
                color: '#FFFFFF',
                paddingTop: '7rem',
                position: 'relative',
                height: '80vh'
            },
            _a[theme.breakpoints.up('sm')] = {
                paddingTop: '8rem',
                height: '50vh'
            },
            _a[theme.breakpoints.up('lg')] = {
                marginBottom: '38vh'
            },
            _a),
        buttonStyle: {
            borderRadius: '7px',
            backgroundColor: '#c2b928',
            color: '#FFFFFF',
            margin: '1rem 0'
        },
        textsContainer: (_b = {},
            _b[theme.breakpoints.up('sm')] = {
                width: '50vw'
            },
            _b[theme.breakpoints.up('lg')] = {
                width: '40vw'
            },
            _b),
        sloganMain: {
            fontSize: 'clamp(2rem, 5vw, 4rem)'
        },
        image: (_c = {
                height: '80vh',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
                right: 0
            },
            _c[theme.breakpoints.up('sm')] = {
                height: '50vh'
            },
            _c[theme.breakpoints.up('lg')] = {
                height: '85vh'
            },
            _c)
    });
});
var LandingPage = function () {
    var styles = useStyles();
    return (React.createElement(MainLayout_1["default"], null,
        React.createElement(core_1.Grid, { className: styles.root },
            React.createElement(core_1.Grid, { className: styles.textsContainer },
                React.createElement(core_1.Typography, { variant: 'subtitle1' }, "Dont know what to cook?"),
                React.createElement(core_1.Typography, { className: styles.sloganMain },
                    "Find your favorite food at",
                    ' ',
                    React.createElement("span", { style: { color: '#B76A40', fontWeight: 600 } }, "Foodie.")),
                React.createElement(core_1.Typography, { variant: 'subtitle1' }, "We have everything for every dish."),
                React.createElement(core_1.Button, { className: styles.buttonStyle, variant: 'contained' }, "Know More"))),
        React.createElement("div", { className: styles.image },
            React.createElement(image_1["default"], { src: Food_jpg_1["default"], alt: 'Vincent', layout: 'fill', objectFit: 'cover', quality: 100 }))));
};
exports["default"] = LandingPage;

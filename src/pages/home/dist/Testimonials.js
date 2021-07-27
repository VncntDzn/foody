"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var MainLayout_1 = require("layouts/MainLayout");
var Slides_1 = require("./Slides");
var TestimonialsData_1 = require("utils/data/TestimonialsData");
var useStyles = core_1.makeStyles(function (theme) {
    return core_1.createStyles({
        root: {
            marginTop: '3rem',
            textAlign: 'center'
        }
    });
});
var Steps = function () {
    var styles = useStyles();
    return (React.createElement(MainLayout_1["default"], null,
        React.createElement(core_1.Grid, { className: styles.root },
            React.createElement(core_1.Typography, { variant: 'h5' }, " -- WHAT OTHERS SAY -- "),
            React.createElement(core_1.Typography, { color: 'primary' }, "CHECK OUT THESE FOODIE REVIEWS"),
            React.createElement(Slides_1["default"], { data: TestimonialsData_1["default"] }))));
};
Steps.propTypes = {};
exports["default"] = Steps;

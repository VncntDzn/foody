"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var Slides_1 = require("./Slides");
var StepsData_1 = require("utils/data/StepsData");
var MainLayout_1 = require("layouts/MainLayout");
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
            React.createElement(core_1.Typography, { variant: 'h5' }, " -- HOW IT WORKS -- "),
            React.createElement(core_1.Typography, { color: 'primary' }, "DINNER IS JUST 3 STEPS AWAY"),
            React.createElement(Slides_1["default"], { data: StepsData_1["default"] }))));
};
Steps.propTypes = {};
exports["default"] = Steps;

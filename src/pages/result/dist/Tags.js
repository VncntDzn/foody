"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var useStyles = core_1.makeStyles(function (theme) {
    var _a, _b;
    return core_1.createStyles({
        root: (_a = {
                position: "relative",
                height: "80vh",
                padding: "1rem",
                paddingTop: "5rem"
            },
            _a[theme.breakpoints.up("sm")] = {
                paddingTop: "8rem",
                height: "50vh"
            },
            _a[theme.breakpoints.up("lg")] = {
                marginBottom: "38vh"
            },
            _a),
        youtubeContainer: (_b = {
                alignSelf: "center",
                height: "50vh",
                width: "90vw",
                marginTop: "1rem"
            },
            _b[theme.breakpoints.up("sm")] = {
                height: "40vh",
                width: "82vw"
            },
            _b[theme.breakpoints.up("md")] = {
                height: "35vh",
                width: "78vw"
            },
            _b[theme.breakpoints.up("lg")] = {
                height: "95vh",
                width: "81vw"
            },
            _b),
        mealName: {
            fontSize: "clamp(1.6rem, 5vw, 2rem)",
            fontWeight: 700
        }
    });
});
var Tags = function (_a) {
    var _b;
    var data = _a.data;
    var styles = useStyles();
    return (React.createElement(core_1.Grid, { container: true, wrap: "wrap", justify: "flex-start" },
        React.createElement(core_1.Grid, { container: true, item: true, justify: "center", alignContent: "center", alignItems: "center", xs: 3, md: 2, sm: 2, lg: 1 },
            React.createElement(core_1.Typography, { color: "primary", align: "center" }, "Tags:")), (_b = data === null || data === void 0 ? void 0 : data.strTags) === null || _b === void 0 ? void 0 :
        _b.split(",").map(function (tag, i) { return (React.createElement(core_1.Typography, { key: i, variant: "subtitle1" },
            tag,
            ", \u00A0")); })));
};
exports["default"] = Tags;

"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var Instructions = function (_a) {
    var strInstructions = _a.strInstructions;
    return (React.createElement("div", null,
        React.createElement(core_1.Typography, { color: "primary", variant: "h5", align: "center" }, "-- How to cook --"), strInstructions === null || strInstructions === void 0 ? void 0 :
        strInstructions.split(".").map(function (tag, i) { return (React.createElement("ul", { key: i },
            React.createElement("li", null, tag))); })));
};
exports["default"] = Instructions;

"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var Ingredients = function (_a) {
    var data = _a.data;
    return (React.createElement(core_1.Grid, { container: true, direction: "row", justify: "center" },
        React.createElement(core_1.Grid, { item: true, sm: 4 },
            React.createElement("ul", null,
                React.createElement("li", null, data === null || data === void 0 ? void 0 : data.strIngredient1),
                React.createElement("li", null, data === null || data === void 0 ? void 0 : data.strIngredient2),
                React.createElement("li", null, data === null || data === void 0 ? void 0 : data.strIngredient3),
                React.createElement("li", null, data === null || data === void 0 ? void 0 : data.strIngredient4),
                React.createElement("li", null, data === null || data === void 0 ? void 0 : data.strIngredient5))),
        React.createElement(core_1.Grid, { item: true, sm: 4 },
            React.createElement("ul", null,
                React.createElement("li", null, data === null || data === void 0 ? void 0 : data.strIngredient6),
                React.createElement("li", null, data === null || data === void 0 ? void 0 : data.strIngredient7),
                React.createElement("li", null, data === null || data === void 0 ? void 0 : data.strIngredient8),
                React.createElement("li", null, data === null || data === void 0 ? void 0 : data.strIngredient9),
                React.createElement("li", null, data === null || data === void 0 ? void 0 : data.strIngredient10)))));
};
exports["default"] = Ingredients;

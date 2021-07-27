"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var head_1 = require("next/head");
var styles_1 = require("@material-ui/core/styles");
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
var theme_1 = require("theme");
require("globals");
function MyApp(props) {
    var Component = props.Component, pageProps = props.pageProps;
    react_1.useEffect(function () {
        // Remove the server-side injected CSS.
        var jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "My page"),
            React.createElement("meta", { name: 'viewport', content: 'minimum-scale=1, initial-scale=1, width=device-width' })),
        React.createElement(styles_1.ThemeProvider, { theme: theme_1["default"] },
            React.createElement(CssBaseline_1["default"], null),
            React.createElement(Component, __assign({}, pageProps)))));
}
exports["default"] = MyApp;

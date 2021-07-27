"use strict";
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var react_multi_carousel_1 = require("react-multi-carousel");
require("react-multi-carousel/lib/styles.css");
var useStyles = core_1.makeStyles(function (theme) {
    var _a;
    return core_1.createStyles({
        cardContainer: (_a = {
                textAlign: 'justify',
                borderRadius: '10px',
                margin: '1rem 0'
            },
            _a[theme.breakpoints.up('sm')] = {
                width: '60%'
            },
            _a[theme.breakpoints.up('md')] = {
                width: '25rem',
                height: '25rem'
            },
            _a),
        slidesContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    });
});
var responsive = {
    tablet: {
        breakpoint: { max: 3000, min: 768 },
        items: 3,
        slidesToSlide: 3
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};
var Slides = function (_a) {
    var data = _a.data;
    var styles = useStyles();
    return (React.createElement(react_multi_carousel_1["default"], { responsive: responsive }, data === null || data === void 0 ? void 0 : data.map(function (_a) {
        var id = _a.id, img = _a.img, content = _a.content, name = _a.name;
        return (React.createElement(core_1.Container, { className: styles.slidesContainer, key: id },
            React.createElement(core_1.Card, { className: styles.cardContainer, raised: true },
                React.createElement(core_1.CardMedia, { image: img === null || img === void 0 ? void 0 : img.src, component: 'img', title: name }),
                React.createElement(core_1.CardContent, null,
                    React.createElement(core_1.Typography, { color: 'primary', variant: 'h5', gutterBottom: true },
                        id,
                        ". ",
                        name),
                    content))));
    })));
};
Slides.propTypes = {};
exports["default"] = Slides;

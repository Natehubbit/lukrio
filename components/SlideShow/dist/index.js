"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_snap_carousel_1 = require("react-native-snap-carousel");
var useSlides_1 = require("../../hooks/useSlides");
var SlideCard_1 = require("../SlideCard");
var SlideShowStyle_1 = require("./SlideShowStyle");
var SlidePagination_1 = require("../SlidePagination");
var useEditor_1 = require("../../hooks/useEditor");
var SlideShow = function () {
    var _a = useEditor_1["default"](), setSlideId = _a.setSlideId, clearTextId = _a.clearTextId;
    var width = react_native_1.useWindowDimensions().width;
    var slides = useSlides_1.useSlides();
    var _b = react_1.useState(0), page = _b[0], setPage = _b[1];
    var pages = slides.length || 0;
    var ref = react_1.useRef();
    react_1.useEffect(function () {
        setSlideId(page);
        clearTextId();
    }, [page]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_snap_carousel_1["default"], { ref: ref, onSnapToItem: setPage, data: slides, renderItem: function (_a) {
                var item = _a.item;
                return react_1["default"].createElement(react_native_1.View, { style: [SlideShowStyle_1["default"].item] },
                    react_1["default"].createElement(SlideCard_1["default"], { data: item }));
            }, sliderWidth: width, itemWidth: width }),
        react_1["default"].createElement(SlidePagination_1["default"], { pages: pages, page: page })));
};
exports["default"] = SlideShow;

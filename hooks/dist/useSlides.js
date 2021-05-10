"use strict";
exports.__esModule = true;
exports.useSlides = void 0;
var store_1 = require("../redux/store");
exports.useSlides = function () {
    return store_1.useSelector(function (state) { return state.slides.current; });
};

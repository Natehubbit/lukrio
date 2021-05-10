"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var SlideShowStyle = react_native_1.StyleSheet.create({
    item: {
        paddingHorizontal: react_native_responsive_screen_1.widthPercentageToDP("5%"),
        paddingVertical: react_native_responsive_screen_1.widthPercentageToDP("3%")
    }
});
exports["default"] = SlideShowStyle;

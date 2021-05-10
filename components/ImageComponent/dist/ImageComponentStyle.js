"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var ImageComponentStyle = react_native_1.StyleSheet.create({
    container: {
        height: react_native_responsive_screen_1.heightPercentageToDP("20%"),
        width: "80%",
        marginBottom: react_native_responsive_screen_1.heightPercentageToDP("2%")
    },
    img: {
        height: "100%",
        left: 0,
        width: "100%"
    },
    actions: {
        flexDirection: "row",
        position: "absolute",
        zIndex: 5,
        right: -25,
        flexWrap: "wrap"
    }
});
exports["default"] = ImageComponentStyle;

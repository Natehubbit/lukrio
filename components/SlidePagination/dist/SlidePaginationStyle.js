"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var theme_1 = require("../../common/theme");
var SlidePaginationStyle = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        // backgroundColor: "red",
        position: "absolute",
        width: "100%",
        bottom: react_native_responsive_screen_1.heightPercentageToDP("11%")
    },
    dot: {
        height: react_native_responsive_screen_1.widthPercentageToDP("2%"),
        width: react_native_responsive_screen_1.widthPercentageToDP("2%"),
        borderRadius: react_native_responsive_screen_1.widthPercentageToDP("100%"),
        margin: react_native_responsive_screen_1.widthPercentageToDP("1%"),
        backgroundColor: theme_1.COLORS.border.val,
        elevation: 4
    },
    active: {
        backgroundColor: theme_1.COLORS.white.val
    }
});
exports["default"] = SlidePaginationStyle;

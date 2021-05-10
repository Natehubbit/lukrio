"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var theme_1 = require("../../common/theme");
var GradientSelectorStyle = react_native_1.StyleSheet.create({
    container: {
        padding: react_native_responsive_screen_1.heightPercentageToDP("1%")
    },
    colors: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    add: {
        marginTop: react_native_responsive_screen_1.heightPercentageToDP("1%")
    },
    addText: {
        color: theme_1.COLORS.primary.val,
        fontWeight: "bold"
    },
    row: {
        marginBottom: react_native_responsive_screen_1.heightPercentageToDP("2.2%")
    },
    label: {
        color: theme_1.COLORS.primary.val,
        fontWeight: "bold"
    },
    head: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12
    }
});
exports["default"] = GradientSelectorStyle;

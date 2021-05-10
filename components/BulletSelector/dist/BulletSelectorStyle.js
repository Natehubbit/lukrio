"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var theme_1 = require("../../common/theme");
var BulletSelectorStyle = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: theme_1.COLORS.primary.val,
        paddingHorizontal: react_native_responsive_screen_1.heightPercentageToDP("1%"),
        paddingVertical: react_native_responsive_screen_1.heightPercentageToDP("2%"),
        justifyContent: "space-between",
        alignItems: "center"
    },
    btn: {
        borderRadius: 4,
        padding: react_native_responsive_screen_1.widthPercentageToDP("2%")
    },
    label: {
        fontSize: react_native_responsive_screen_1.heightPercentageToDP("2.2%")
    }
});
exports["default"] = BulletSelectorStyle;

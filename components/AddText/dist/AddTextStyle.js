"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var theme_1 = require("../../common/theme");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var AddTextStyle = react_native_1.StyleSheet.create({
    root: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
    },
    container: {
        borderColor: theme_1.COLORS.border.val,
        borderWidth: 2,
        borderStyle: "dashed",
        borderRadius: 1
    },
    title: {
        fontSize: react_native_responsive_screen_1.heightPercentageToDP("4%"),
        fontWeight: "bold",
        color: theme_1.COLORS.white.val
    },
    subText: {
        fontSize: react_native_responsive_screen_1.heightPercentageToDP("2%"),
        color: theme_1.COLORS.white.val,
        fontStyle: "italic"
    },
    titleSpace: {
        marginBottom: react_native_responsive_screen_1.heightPercentageToDP("3%"),
        paddingHorizontal: react_native_responsive_screen_1.widthPercentageToDP("1%")
    },
    subSpace: {
        marginBottom: react_native_responsive_screen_1.heightPercentageToDP("2%"),
        paddingHorizontal: react_native_responsive_screen_1.widthPercentageToDP("1%")
    },
    editedSubContainer: {
        borderWidth: 0
    },
    editedSubText: {
        fontStyle: "normal",
        fontSize: react_native_responsive_screen_1.heightPercentageToDP("2.5%")
    },
    actionBtn: {
        marginHorizontal: react_native_responsive_screen_1.widthPercentageToDP("1%"),
        elevation: 10
    },
    btns: {
        marginLeft: 5,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    bullet: {
        backgroundColor: theme_1.COLORS.white.val,
        height: react_native_responsive_screen_1.heightPercentageToDP("1%"),
        width: react_native_responsive_screen_1.heightPercentageToDP("1%"),
        borderRadius: react_native_responsive_screen_1.heightPercentageToDP("100%"),
        marginRight: 5
    }
});
exports["default"] = AddTextStyle;

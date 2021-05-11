"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var theme_1 = require("../../common/theme");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var UtilService_1 = require("../../services/UtilService");
var NavbarStyle = react_native_1.StyleSheet.create({
  container: {
    padding:
      react_native_responsive_screen_1.widthPercentageToDP(
        "2%"
      ),
    elevation: 2,
    backgroundColor: theme_1.COLORS.white.val,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  head: {
    fontSize:
      react_native_responsive_screen_1.heightPercentageToDP(
        "2.2%"
      ),
    fontWeight: "bold",
    color: UtilService_1["default"].alterColor(
      theme_1.COLORS.color1.val,
      theme_1.COLORS.color1.step
    ),
  },
  link: {
    color: UtilService_1["default"].alterColor(
      theme_1.COLORS.color1.val,
      theme_1.COLORS.color1.step
    ),
    fontSize:
      react_native_responsive_screen_1.heightPercentageToDP(
        "2%"
      ),
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
  },
});
exports["default"] = NavbarStyle;

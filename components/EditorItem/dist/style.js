"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var theme_1 = require("../../common/theme");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var EditorItemStyle = react_native_1.StyleSheet.create({
  container: {
    minHeight:
      react_native_responsive_screen_1.heightPercentageToDP(
        "30%"
      ),
  },
  header: {
    padding:
      react_native_responsive_screen_1.widthPercentageToDP(
        "3%"
      ),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  head: {
    color: theme_1.COLORS.white.val,
    fontSize:
      react_native_responsive_screen_1.heightPercentageToDP(
        "2.5%"
      ),
    fontWeight: "600",
  },
  gradient: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  itemBody: {
    // paddingVertical: wp("3%"),
  },
});
exports["default"] = EditorItemStyle;

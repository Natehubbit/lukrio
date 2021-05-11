"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var theme_1 = require("../../common/theme");
var FontSelectorStyle = react_native_1.StyleSheet.create({
  container: {
    padding:
      react_native_responsive_screen_1.widthPercentageToDP(
        "2%"
      ),
    borderBottomWidth: 1,
    borderColor: theme_1.COLORS.primary.val,
    paddingVertical:
      react_native_responsive_screen_1.heightPercentageToDP(
        "2%"
      ),
  },
  value: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize:
      react_native_responsive_screen_1.heightPercentageToDP(
        "2%"
      ),
  },
  label: {
    fontSize:
      react_native_responsive_screen_1.heightPercentageToDP(
        "2.2%"
      ),
  },
});
exports["default"] = FontSelectorStyle;

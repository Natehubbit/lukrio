"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var theme_1 = require("../../common/theme");
var IconButtonStyle = react_native_1.StyleSheet.create({
  container: {
    padding:
      react_native_responsive_screen_1.widthPercentageToDP(
        "1%"
      ),
  },
  iconContainer: {
    height: "100%",
    padding:
      react_native_responsive_screen_1.widthPercentageToDP(
        "3%"
      ),
  },
  active: {
    borderWidth: 1,
    borderColor: theme_1.COLORS.primary.val,
    borderRadius: 4,
  },
});
exports["default"] = IconButtonStyle;

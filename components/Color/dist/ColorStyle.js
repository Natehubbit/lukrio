"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var theme_1 = require("../../common/theme");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var ColorStyle = react_native_1.StyleSheet.create({
  colorType: {
    borderRadius: 4,
  },
  color: {
    borderRadius:
      react_native_responsive_screen_1.heightPercentageToDP(
        "100%"
      ),
    height:
      react_native_responsive_screen_1.heightPercentageToDP(
        "4%"
      ),
    width:
      react_native_responsive_screen_1.heightPercentageToDP(
        "4%"
      ),
    margin:
      react_native_responsive_screen_1.widthPercentageToDP(
        "1%"
      ),
    borderWidth: 1,
    borderColor: "grey",
  },
  activeIcon: {
    color: theme_1.COLORS.primary.val,
    position: "absolute",
    right: -8,
    bottom: -5,
  },
});
exports["default"] = ColorStyle;

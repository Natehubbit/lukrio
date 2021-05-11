"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var ImageSelectorStyle = react_native_1.StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal:
      react_native_responsive_screen_1.heightPercentageToDP(
        "1%"
      ),
    alignItems: "center",
    paddingVertical:
      react_native_responsive_screen_1.heightPercentageToDP(
        "1.2%"
      ),
    opacity: 0.7,
  },
  selected: {
    height: 50,
    width: 50,
  },
});
exports["default"] = ImageSelectorStyle;

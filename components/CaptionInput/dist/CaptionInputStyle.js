"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var CaptionInputStyle = react_native_1.StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    margin:
      react_native_responsive_screen_1.widthPercentageToDP(
        "5%"
      ),
  },
  input: {
    fontSize:
      react_native_responsive_screen_1.heightPercentageToDP(
        "2%"
      ),
  },
});
exports["default"] = CaptionInputStyle;

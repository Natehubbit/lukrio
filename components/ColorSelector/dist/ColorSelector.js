"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var ColorSelectorStyle = react_native_1.StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  typeContainer: {
    padding:
      react_native_responsive_screen_1.widthPercentageToDP(
        "2%"
      ),
  },
  colorType: {
    borderRadius: 4,
  },
  colorContainer: {
    flexDirection: "row",
    padding:
      react_native_responsive_screen_1.widthPercentageToDP(
        "2%"
      ),
    flexWrap: "wrap",
  },
  color: {
    borderRadius:
      react_native_responsive_screen_1.heightPercentageToDP(
        "100%"
      ),
    height:
      react_native_responsive_screen_1.heightPercentageToDP(
        "5%"
      ),
    width:
      react_native_responsive_screen_1.heightPercentageToDP(
        "5%"
      ),
    backgroundColor: "red",
  },
});
exports["default"] = ColorSelectorStyle;

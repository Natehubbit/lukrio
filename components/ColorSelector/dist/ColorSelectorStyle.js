"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var theme_1 = require("../../common/theme");
var ColorSelectorStyle = react_native_1.StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: theme_1.COLORS.primary.val,
    paddingVertical:
      react_native_responsive_screen_1.heightPercentageToDP(
        "2%"
      ),
  },
  typeContainer: {
    flex: 1,
  },
  colorType: {
    borderRadius: 4,
  },
  colorContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 8,
    paddingHorizontal: 15,
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
  modeContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  mode: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    padding:
      react_native_responsive_screen_1.heightPercentageToDP(
        "1%"
      ),
  },
});
exports["default"] = ColorSelectorStyle;

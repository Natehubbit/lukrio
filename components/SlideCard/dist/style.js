"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var theme_1 = require("../../common/theme");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var SlideCardStyle = react_native_1.StyleSheet.create({
  container: {
    minHeight:
      react_native_responsive_screen_1.heightPercentageToDP(
        "40%"
      ),
    backgroundColor: theme_1.COLORS.white.val,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 10,
    zIndex: 100,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
    flex: 1,
  },
  titleContainer: {
    // flex: 1,
  },
  title: {
    color: theme_1.COLORS.white.val,
    fontSize:
      react_native_responsive_screen_1.heightPercentageToDP(
        "1.5%"
      ),
  },
  body: {
    flex: 1,
    paddingVertical:
      react_native_responsive_screen_1.widthPercentageToDP(
        "5%"
      ),
    paddingHorizontal:
      react_native_responsive_screen_1.widthPercentageToDP(
        "2%"
      ),
    alignItems: "flex-start",
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
    bottom: 0,
  },
  imgBack: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});
exports["default"] = SlideCardStyle;

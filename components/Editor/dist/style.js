"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var theme_1 = require("../../common/theme");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var EditorStyle = react_native_1.StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    borderTopColor: theme_1.COLORS.primary.val,
    borderTopWidth: 2,
  },
  header: {
    paddingHorizontal:
      react_native_responsive_screen_1.widthPercentageToDP(
        "3%"
      ),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  heading: {
    fontSize:
      react_native_responsive_screen_1.heightPercentageToDP(
        "3%"
      ),
    color: theme_1.COLORS.primary.val,
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
  },
  noTextSelected: {
    padding:
      react_native_responsive_screen_1.heightPercentageToDP(
        "2%"
      ),
    opacity: 0.5,
  },
});
exports["default"] = EditorStyle;

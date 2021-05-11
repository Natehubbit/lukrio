"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Icon_1 = require("../Icon");
var IconButtonStyle_1 = require("./IconButtonStyle");
var theme_1 = require("../../common/theme");
var IconButton = function (_a) {
  var name = _a.name,
    active = _a.active,
    onPress = _a.onPress;
  return react_1["default"].createElement(
    react_native_1.TouchableNativeFeedback,
    {
      onPress: onPress,
      style: [IconButtonStyle_1["default"].container],
    },
    react_1["default"].createElement(
      react_native_1.View,
      {
        style: [
          IconButtonStyle_1["default"].iconContainer,
          active && IconButtonStyle_1["default"].active,
        ],
      },
      react_1["default"].createElement(Icon_1["default"], {
        name: name,
        color: theme_1.COLORS.primary.val,
      })
    )
  );
};
exports["default"] = IconButton;

"use strict";
exports.__esModule = true;
exports.Color = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var ColorStyle_1 = require("./ColorStyle");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var Icon_1 = require("../Icon");
exports.Color = function (_a) {
  var color = _a.color,
    type = _a.type,
    active = _a.active,
    onPress = _a.onPress;
  var isCat = type === "category";
  return react_1["default"].createElement(
    react_1["default"].Fragment,
    null,
    react_1["default"].createElement(
      react_native_1.TouchableOpacity,
      {
        onPress: onPress,
        style: [
          ColorStyle_1["default"].color,
          isCat && ColorStyle_1["default"].colorType,
          { backgroundColor: color },
        ],
      },
      active &&
        react_1["default"].createElement(
          Icon_1["default"],
          {
            size: react_native_responsive_screen_1.heightPercentageToDP(
              "2%"
            ),
            name: "check-circle",
            style: ColorStyle_1["default"].activeIcon,
          }
        )
    )
  );
};
exports["default"] = exports.Color;

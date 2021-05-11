"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (
          var s, i = 1, n = arguments.length;
          i < n;
          i++
        ) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
exports.__esModule = true;
exports.useSlideCardTheme = void 0;
var react_1 = require("react");
var theme_1 = require("../common/theme");
var UtilService_1 = require("../services/UtilService");
exports.useSlideCardTheme = function () {
  var _a = react_1.useState({
      primary: theme_1.COLORS.color1,
      secondary: UtilService_1["default"].alterColor(
        theme_1.COLORS.color1,
        76000
      ),
    }),
    cardColor = _a[0],
    setCardColor = _a[1];
  var changeCardColor = function (color) {
    setCardColor(function (c) {
      return __assign(__assign({}, c), {
        primary: color,
        secondary: "rgba(" + color + ",0.5)",
      });
    });
  };
  return {
    changeCardColor: changeCardColor,
    cardColor: cardColor,
  };
};

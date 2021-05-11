"use strict";
var _a;
exports.__esModule = true;
exports.BACKGROUND_TYPE =
  exports.COLORS =
  exports.EDIT_TOOLS =
    void 0;
var UtilService_1 = require("../services/UtilService");
var theme_1 = require("./theme");
exports.EDIT_TOOLS =
  ((_a = {
    Text: [],
    Background: [],
  }),
  (_a["Add Images"] = []),
  (_a.Icons = []),
  _a);
exports.COLORS = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "grey",
  "brown",
  "pink",
  "white",
  theme_1.COLORS.color1.val,
  UtilService_1["default"].alterColor(
    theme_1.COLORS.color1.val,
    theme_1.COLORS.color1.step
  ),
];
exports.BACKGROUND_TYPE = ["Mono", "Gradient", "Image"];

"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var SlidePaginationStyle_1 = require("./SlidePaginationStyle");
var SlidePagination = function (_a) {
  var pages = _a.pages,
    page = _a.page;
  var dots = new Array(pages).fill(0);
  return react_1["default"].createElement(
    react_native_1.View,
    {
      style: [SlidePaginationStyle_1["default"].container],
    },
    dots.map(function (_, i) {
      var isActive = i === page;
      return react_1["default"].createElement(
        react_native_1.View,
        {
          key: i,
          style: [
            SlidePaginationStyle_1["default"].dot,
            isActive &&
              SlidePaginationStyle_1["default"].active,
          ],
        }
      );
    })
  );
};
exports["default"] = SlidePagination;

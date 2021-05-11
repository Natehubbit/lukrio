"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var slider_1 = require("@react-native-community/slider");
var FontSelectorStyle_1 = require("./FontSelectorStyle");
var store_1 = require("../../redux/store");
var slideSlice_1 = require("../../redux/slices/slideSlice");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var useEditor_1 = require("../../hooks/useEditor");
var FontSelector = function () {
  var dispatch = store_1.useDispatch();
  var _a = useEditor_1["default"](),
    textId = _a.textId,
    slideId = _a.slideId,
    style = _a.style;
  var _b = react_1.useState(
      (
        style === null || style === void 0
          ? void 0
          : style.fontSize
      )
        ? style.fontSize
        : react_native_responsive_screen_1.heightPercentageToDP(
            "3%"
          )
    ),
    value = _b[0],
    setValue = _b[1];
  react_1.useEffect(
    function () {
      style &&
      (style === null || style === void 0
        ? void 0
        : style.fontSize)
        ? setValue(
            style === null || style === void 0
              ? void 0
              : style.fontSize
          )
        : setValue(
            react_native_responsive_screen_1.heightPercentageToDP(
              "3%"
            )
          );
    },
    [textId, slideId, style]
  );
  var onValueChange = function (val) {
    setValue(val);
    dispatch(
      slideSlice_1.slideActions.setSubtextStyle({
        idx: textId,
        slideId: slideId,
        style: {
          fontSize: val,
        },
      })
    );
  };
  return react_1["default"].createElement(
    react_native_1.View,
    { style: [FontSelectorStyle_1["default"].container] },
    react_1["default"].createElement(
      react_native_1.Text,
      { style: [FontSelectorStyle_1["default"].label] },
      "Font Size ",
      "\n"
    ),
    react_1["default"].createElement(slider_1["default"], {
      value: value,
      minimumValue: 4,
      maximumValue: 100,
      step: 1,
      onValueChange: onValueChange,
    }),
    react_1["default"].createElement(
      react_native_1.Text,
      { style: [FontSelectorStyle_1["default"].value] },
      value.toFixed(0)
    )
  );
};
exports["default"] = FontSelector;

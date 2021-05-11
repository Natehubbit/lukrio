"use strict";
exports.__esModule = true;
var react_1 = require("react");
var store_1 = require("../redux/store");
var useHistory = function () {
  var slides = store_1.useSelector(function (s) {
    return s;
  });
  react_1.useEffect(
    function () {
      console.log(slides);
    },
    [slides]
  );
};
exports["default"] = useHistory;

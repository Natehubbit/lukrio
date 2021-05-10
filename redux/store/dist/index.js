"use strict";
var _a;
exports.__esModule = true;
exports.useSelector = exports.useDispatch = exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var slideSlice_1 = require("../slices/slideSlice");
var editorSlice_1 = require("../slices/editorSlice");
var rootReducer = redux_1.combineReducers((_a = {},
    _a[slideSlice_1.slideSlice.name] = slideSlice_1.slideSlice.reducer,
    _a[editorSlice_1.editorSlice.name] = editorSlice_1.editorSlice.reducer,
    _a));
exports.store = toolkit_1.configureStore({
    reducer: rootReducer
});
exports.useDispatch = function () {
    return react_redux_1.useDispatch();
};
exports.useSelector = react_redux_1.useSelector;

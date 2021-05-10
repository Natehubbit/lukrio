"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;
exports.__esModule = true;
exports.editorActions = exports.editorSlice = exports.actions = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    slideId: undefined,
    textId: undefined,
    style: undefined
};
exports.actions = (_a = toolkit_1.createSlice({
    name: "editor",
    initialState: initialState,
    reducers: {
        setActiveSlide: function (state, _a) {
            var payload = _a.payload;
            var id = payload.id;
            return __assign(__assign({}, state), { slideId: id });
        },
        setActiveText: function (state, _a) {
            var payload = _a.payload;
            var id = payload.id;
            return __assign(__assign({}, state), { textId: id });
        },
        clearActiveText: function (state) {
            return __assign(__assign({}, state), { textId: undefined });
        },
        clearSlideId: function (state) {
            return __assign(__assign({}, state), { slideId: undefined });
        },
        clearAll: function () {
            return initialState;
        }
    }
}), _a).actions, exports.editorSlice = __rest(_a, ["actions"]);
exports.editorActions = __assign({}, exports.actions);

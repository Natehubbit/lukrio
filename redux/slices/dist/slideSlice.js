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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
exports.__esModule = true;
exports.slideActions = exports.slideSlice = exports.actions = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var theme_1 = require("../../common/theme");
var UtilService_1 = require("../../services/UtilService");
var initialState = {
    past: [],
    future: [],
    current: [
        {
            id: 0,
            title: "Fundamental Analysis",
            header: { text: "", style: undefined, type: "text" },
            subTexts: [],
            background: {
                image: undefined,
                mono: undefined,
                colors: {
                    gradient: [
                        theme_1.COLORS.color1.val,
                        UtilService_1["default"].alterColor(theme_1.COLORS.color1.val, theme_1.COLORS.color1.step),
                    ]
                }
            }
        },
        {
            id: 1,
            title: "Technical Analysis",
            header: { text: "", style: undefined, type: "text" },
            subTexts: [],
            background: {
                image: undefined,
                mono: undefined,
                colors: {
                    gradient: [
                        theme_1.COLORS.color1.val,
                        UtilService_1["default"].alterColor(theme_1.COLORS.color1.val, theme_1.COLORS.color1.step),
                    ]
                }
            }
        },
    ]
};
exports.actions = (_a = toolkit_1.createSlice({
    name: "slides",
    initialState: initialState,
    reducers: {
        setHeader: function (state, _a) {
            var payload = _a.payload;
            var id = payload.id, text = payload.text;
            var update = state.current.map(function (d) {
                if (d.id === id) {
                    return __assign(__assign({}, d), { header: { text: text } });
                }
                return d;
            });
            var future = state.future.length > 0 ? [] : state.future;
            return __assign(__assign({}, state), { current: update, future: future, past: __spreadArrays(state.past, [state.current]) });
        },
        addSubText: function (state, _a) {
            var payload = _a.payload;
            var id = payload.id, text = payload.text;
            var update = state.current.map(function (d) {
                if (d.id === id) {
                    return __assign(__assign({}, d), { subTexts: __spreadArrays(d.subTexts, [
                            {
                                text: text,
                                bullet: false,
                                style: undefined,
                                type: "text"
                            },
                        ]) });
                }
                return d;
            });
            var future = state.future.length > 0 ? [] : state.future;
            return __assign(__assign({}, state), { current: update, past: __spreadArrays(state.past, [state.current]), future: future });
        },
        addSubImage: function (state, _a) {
            var payload = _a.payload;
            var id = payload.id, text = payload.text;
            var update = state.current.map(function (d) {
                if (d.id === id) {
                    return __assign(__assign({}, d), { subTexts: __spreadArrays(d.subTexts, [
                            {
                                text: text,
                                bullet: false,
                                style: undefined,
                                type: "image"
                            },
                        ]) });
                }
                return d;
            });
            var future = state.future.length > 0 ? [] : state.future;
            return __assign(__assign({}, state), { current: update, past: __spreadArrays(state.past, [state.current]), future: future });
        },
        removeSubtext: function (state, _a) {
            var payload = _a.payload;
            var slideId = payload.slideId, idx = payload.idx;
            var update = state.current.map(function (d) {
                if (d.id === slideId) {
                    var newSubTxts = d.subTexts.filter(function (_, i) { return i !== idx; });
                    return __assign(__assign({}, d), { subTexts: newSubTxts });
                }
                return d;
            });
            var future = state.future.length > 0 ? [] : state.future;
            return __assign(__assign({}, state), { current: update, past: __spreadArrays(state.past, [state.current]), future: future });
        },
        updateSubtext: function (state, _a) {
            var payload = _a.payload;
            var slideId = payload.slideId, textId = payload.textId, text = payload.text;
            var update = state.current.map(function (d) {
                if (d.id === slideId) {
                    var newSubs = d.subTexts.map(function (txt, i) {
                        if (textId === i) {
                            return __assign(__assign({}, txt), { bullet: false, text: text });
                        }
                        return txt;
                    });
                    return __assign(__assign({}, d), { subTexts: newSubs });
                }
                return d;
            });
            var future = state.future.length > 0 ? [] : state.future;
            return __assign(__assign({}, state), { current: update, past: __spreadArrays(state.past, [state.current]), future: future });
        },
        undo: function (state) {
            var past = state.past, current = state.current;
            if (past.length === 0)
                return state;
            var prev = past[past.length - 1];
            var newPast = past.slice(0, past.length - 1);
            return __assign(__assign({}, state), { current: prev, past: newPast, future: __spreadArrays([current], state.future) });
        },
        redo: function (state) {
            var future = state.future, past = state.past, current = state.current;
            if (future.length === 0)
                return state;
            var next = future[0];
            var newFuture = future.slice(1);
            return __assign(__assign({}, state), { past: __spreadArrays(past, [current]), current: next, future: newFuture });
        },
        setSubtextStyle: function (state, _a) {
            var payload = _a.payload;
            var slideId = payload.slideId, idx = payload.idx, style = payload.style;
            var update = state.current.map(function (s) {
                if (s.id === slideId) {
                    var newSubTexts = s.subTexts.map(function (sub, i) {
                        if (i === idx) {
                            var hasStyle = !!sub.style;
                            return hasStyle
                                ? __assign(__assign({}, sub), { style: __assign(__assign({}, sub.style), style) }) : __assign(__assign({}, sub), { style: style });
                        }
                        return sub;
                    });
                    return __assign(__assign({}, s), { subTexts: newSubTexts });
                }
                return s;
            });
            var future = state.future.length > 0 ? [] : state.future;
            return __assign(__assign({}, state), { current: update, past: __spreadArrays(state.past, [state.current]), future: future });
        },
        setSubTextBullet: function (state, _a) {
            var payload = _a.payload;
            var slideId = payload.slideId, idx = payload.idx, bullet = payload.bullet;
            var update = state.current.map(function (s) {
                if (s.id === slideId) {
                    var newSubTexts = s.subTexts.map(function (sub, i) {
                        if (i === idx) {
                            return __assign(__assign({}, sub), { bullet: bullet });
                        }
                        return sub;
                    });
                    return __assign(__assign({}, s), { subTexts: newSubTexts });
                }
                return s;
            });
            var future = state.future.length > 0 ? [] : state.future;
            return __assign(__assign({}, state), { current: update, past: __spreadArrays(state.past, [state.current]), future: future });
        },
        setBackground: function (state, _a) {
            var payload = _a.payload;
            var back = payload.background, slideId = payload.slideId;
            var update = state.current.map(function (s) {
                if (s.id === slideId) {
                    return __assign(__assign({}, s), { background: __assign(__assign({}, s.background), back) });
                }
                return s;
            });
            var future = state.future.length > 0 ? [] : state.future;
            return __assign(__assign({}, state), { current: update, past: __spreadArrays(state.past, [state.current]), future: future });
        }
    }
}), _a).actions, exports.slideSlice = __rest(_a, ["actions"]);
exports.slideActions = __assign({}, exports.actions);

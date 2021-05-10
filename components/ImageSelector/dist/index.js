"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var UtilService_1 = require("../../services/UtilService");
var Icon_1 = require("../Icon");
var ImageSelectorStyle_1 = require("./ImageSelectorStyle");
var ImageSelector = function (_a) {
    var imageUri = _a.uri, onSelect = _a.onSelect;
    var _b = react_1.useState(imageUri), uri = _b[0], setUri = _b[1];
    react_1.useEffect(function () {
        UtilService_1["default"].requestImagePermission();
    }, []);
    react_1.useEffect(function () {
        setUri(imageUri);
    }, [imageUri]);
    var onPickImage = function () { return __awaiter(void 0, void 0, void 0, function () {
        var uri;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, UtilService_1["default"].pickImage()];
                case 1:
                    uri = _a.sent();
                    if (uri) {
                        setUri(uri);
                        onSelect(uri);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_native_1.TouchableNativeFeedback, { onPress: onPickImage },
        react_1["default"].createElement(react_native_1.View, { style: [ImageSelectorStyle_1["default"].container] },
            react_1["default"].createElement(react_native_1.Text, null, "Select Image"),
            uri
                ? react_1["default"].createElement(react_native_1.Image, { resizeMode: 'cover', source: { uri: uri }, style: [ImageSelectorStyle_1["default"].selected] })
                : react_1["default"].createElement(Icon_1["default"], { name: 'camera-image' }))));
};
exports["default"] = ImageSelector;
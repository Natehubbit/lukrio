"use strict";
exports.__esModule = true;
var react_1 = require("react");
var store_1 = require("../redux/store");
var editorSlice_1 = require("../redux/slices/editorSlice");
var useEditor = function () {
    var dispatch = store_1.useDispatch();
    var subTextNoRef = react_1.useRef(0);
    var _a = store_1.useSelector(function (s) { return s.editor; }), slideId = _a.slideId, textId = _a.textId;
    var slide = store_1.useSelector(function (s) {
        return s.slides.current.find(function (slide) { return slide.id === slideId; });
    });
    var _b = (slide && (slide === null || slide === void 0 ? void 0 : slide.subTexts.find(function (_, i) { return i === textId; }))) || {
        bullet: false,
        text: "",
        style: undefined,
        type: "text"
    }, bulletVal = _b.bullet, styleVal = _b.style, text = _b.text, type = _b.type;
    var _c = react_1.useState(), style = _c[0], setStyle = _c[1];
    var _d = react_1.useState("text"), textType = _d[0], setTextType = _d[1];
    var _e = react_1.useState(), bullet = _e[0], setBullet = _e[1];
    var _f = react_1.useState(false), hasText = _f[0], setHasText = _f[1];
    var _g = react_1.useState(0), subTextNo = _g[0], setSubTextNo = _g[1];
    var _h = react_1.useState(""), title = _h[0], setTitle = _h[1];
    var _j = react_1.useState(), captionText = _j[0], setCaptionText = _j[1];
    var _k = react_1.useState(), background = _k[0], setBackground = _k[1];
    var getData = function () {
        var _a;
        var _b = slide || {
            background: undefined,
            caption: undefined
        }, background = _b.background, title = _b.title, caption = _b.caption;
        setStyle(styleVal);
        setBullet(bulletVal);
        setHasText(!!text);
        setSubTextNo(((_a = slide === null || slide === void 0 ? void 0 : slide.subTexts) === null || _a === void 0 ? void 0 : _a.length) || 0);
        setBackground(background);
        setTextType(type);
        setTitle(title);
        setCaptionText(caption);
    };
    var setTextId = function (id) {
        dispatch(editorSlice_1.editorActions.setActiveText({ id: id }));
    };
    var setSlideId = function (id) {
        dispatch(editorSlice_1.editorActions.setActiveSlide({ id: id }));
    };
    var clearTextId = function () {
        dispatch(editorSlice_1.editorActions.clearActiveText());
    };
    react_1.useEffect(function () {
        getData();
    }, [textId, slideId, text, slide]);
    react_1.useEffect(function () {
        if (subTextNoRef.current < subTextNo) {
            setTextId(subTextNo - 1);
        }
        else if (subTextNoRef.current > subTextNo) {
            subTextNoRef.current - 1;
        }
    }, [subTextNo]);
    return {
        style: style,
        bullet: bullet,
        slideId: slideId,
        textId: textId,
        hasText: hasText,
        subTextNo: subTextNo,
        background: background,
        textType: textType,
        title: title,
        captionText: captionText,
        setTextId: setTextId,
        setSlideId: setSlideId,
        clearTextId: clearTextId
    };
};
exports["default"] = useEditor;

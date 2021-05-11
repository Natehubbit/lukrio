import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "../redux/store";
import { editorActions } from "../redux/slices/editorSlice";
import { TextStyle } from "react-native";
import { SlideData } from "../types/index";

const useEditor = () => {
  const dispatch = useDispatch();
  const subTextNoRef = useRef(0);
  const { slideId, textId } = useSelector((s) => s.editor);

  const slide = useSelector((s) =>
    s.slides.current.find((slide) => slide.id === slideId)
  );
  const {
    bullet: bulletVal,
    style: styleVal,
    text,
    type,
  } = (slide &&
    slide?.subTexts.find((_, i) => i === textId)) || {
    bullet: false,
    text: "",
    style: undefined,
    type: "text",
  };
  const [style, setStyle] = useState<TextStyle>();
  const [textType, setTextType] = useState<string>("text");
  const [bullet, setBullet] = useState<boolean>();
  const [hasText, setHasText] = useState(false);
  const [subTextNo, setSubTextNo] = useState(0);
  const [title, setTitle] = useState("");
  const [captionText, setCaptionText] = useState<string>();
  const [background, setBackground] =
    useState<SlideData["background"]>();

  const getData = () => {
    const { background, title, caption } = slide || {
      background: undefined,
      caption: undefined,
    };
    setStyle(styleVal);
    setBullet(bulletVal);
    setHasText(!!text);
    setSubTextNo(slide?.subTexts?.length || 0);
    setBackground(background);
    setTextType(type);
    setTitle(title);
    setCaptionText(caption);
  };

  const setTextId = (id: number) => {
    dispatch(editorActions.setActiveText({ id }));
  };
  const setSlideId = (id: number) => {
    dispatch(editorActions.setActiveSlide({ id }));
  };
  const clearTextId = () => {
    dispatch(editorActions.clearActiveText());
  };
  useEffect(() => {
    getData();
  }, [textId, slideId, text, slide]);
  useEffect(() => {
    if (subTextNoRef.current < subTextNo) {
      setTextId(subTextNo - 1);
    } else if (subTextNoRef.current > subTextNo) {
      subTextNoRef.current - 1;
    }
  }, [subTextNo]);

  return {
    style,
    bullet,
    slideId,
    textId,
    hasText,
    subTextNo,
    background,
    textType,
    title,
    captionText,
    setTextId,
    setSlideId,
    clearTextId,
  };
};

export default useEditor;

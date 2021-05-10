import {
  ColorValue,
  StyleProp,
  StyleSheet,
  TextStyle,
} from "react-native";

export interface TextValue {
  id: number;
  text: string;
}

export interface SubText {
  bullet?: boolean;
  text: string;
  style?: TextStyle;
  type?: string;
}

export interface Header {
  text: string;
  style?: StyleProp<TextStyle>;
}

export interface SlideData {
  id: number;
  title: string;
  header: SubText;
  subTexts: SubText[];
  background?: {
    image: string;
    mono: ColorValue;
    colors: {
      gradient: string[];
    };
  };
}

type Coords = {
  x: number;
  y: number;
};

export interface SlideState {
  current: SlideData[];
  past: SlideData[][];
  future: SlideData[][];
}

export interface EditorState {
  slideId: number;
  textId: number;
  style?: any;
}

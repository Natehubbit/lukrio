import UtilService from "../services/UtilService";
import { COLORS as colors } from "./theme";

export const EDIT_TOOLS = {
  Text: [],
  Background: [],
  ["Add Images"]: [],
  Icons: [],
} as const;

export const COLORS = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "grey",
  "brown",
  "pink",
  "white",
  colors.color1.val,
  UtilService.alterColor(
    colors.color1.val,
    colors.color1.step
  ),
] as const;

export const BACKGROUND_TYPE = [
  "Mono",
  "Gradient",
  "Image",
];

import React, { useState } from "react";
import { View, Text } from "react-native";
import { COLORS } from "../common/theme";
import UtilService from "../services/UtilService";

export const useSlideCardTheme = () => {
  const [cardColor, setCardColor] = useState<{
    primary: string;
    secondary: string;
  }>({
    primary: COLORS.color1.val,
    secondary: UtilService.alterColor(COLORS.color1.val, COLORS.color1.step),
  });
  const changeCardColor = (color: string) => {
    setCardColor((c) => ({
      ...c,
      primary: color,
      secondary: `rgba(${color},0.5)`,
    }));
  };
  return {
    changeCardColor,
    cardColor,
  };
};

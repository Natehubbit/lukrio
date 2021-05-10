import { StyleSheet } from "react-native";
import { COLORS } from "../../common/theme";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ColorStyle = StyleSheet.create({
  colorType: {
    borderRadius: 4,
  },
  color: {
    borderRadius: hp("100%"),
    height: hp("4%"),
    width: hp("4%"),
    margin: wp("1%"),
    borderWidth: 1,
    borderColor: "grey",
  },

  activeIcon: {
    color: COLORS.primary.val,
    position: "absolute",
    right: -8,
    bottom: -5,
  },
});

export default ColorStyle;

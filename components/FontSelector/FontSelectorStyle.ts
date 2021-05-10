import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../common/theme";

const FontSelectorStyle = StyleSheet.create({
  container: {
    padding: wp("2%"),
    borderBottomWidth: 1,
    borderColor: COLORS.primary.val,
    paddingVertical: hp("2%"),
  },
  value: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: hp("2%"),
  },
  label: {
    fontSize: hp("2.2%"),
  },
});

export default FontSelectorStyle;

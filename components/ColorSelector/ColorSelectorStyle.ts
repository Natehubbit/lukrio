import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { color } from "react-native-reanimated";
import { COLORS } from "../../common/theme";

const ColorSelectorStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: COLORS.primary.val,
    paddingVertical: hp("2%"),
  },
  typeContainer: {
    flex: 1,
  },
  colorType: {
    borderRadius: 4,
  },
  colorContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 8,
    paddingHorizontal: 15,
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
  modeContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  mode: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    padding: hp("1%"),
  },
});

export default ColorSelectorStyle;

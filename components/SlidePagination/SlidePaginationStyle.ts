import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../common/theme";

const SlidePaginationStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    // backgroundColor: "red",
    position: "absolute",
    width: "100%",
    bottom: hp("11%"),
  },
  dot: {
    height: wp("2%"),
    width: wp("2%"),
    borderRadius: wp("100%"),
    margin: wp("1%"),
    backgroundColor: COLORS.border.val,
    elevation: 4,
  },
  active: {
    backgroundColor: COLORS.white.val,
  },
});

export default SlidePaginationStyle;

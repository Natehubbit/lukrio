import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../common/theme";

const BulletSelectorStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: COLORS.primary.val,
    paddingHorizontal: hp("1%"),
    paddingVertical: hp("2%"),
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    borderRadius: 4,
    padding: wp("2%"),
  },
  label: {
    fontSize: hp("2.2%"),
  },
});

export default BulletSelectorStyle;

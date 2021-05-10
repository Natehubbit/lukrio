import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { COLORS } from "../../common/theme";

const GradientSelectorStyle = StyleSheet.create({
  container: {
    padding: hp("1%"),
  },
  colors: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  add: {
    marginTop: hp("1%"),
  },
  addText: {
    color: COLORS.primary.val,
    fontWeight: "bold",
  },
  row: {
    marginBottom: hp("2.2%"),
  },
  label: {
    color: COLORS.primary.val,
    fontWeight: "bold",
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
});

export default GradientSelectorStyle;

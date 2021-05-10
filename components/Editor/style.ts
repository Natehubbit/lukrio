import { StyleSheet } from "react-native";
import { COLORS } from "../../common/theme";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import UtilService from "../../services/UtilService";

const EditorStyle = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    borderTopColor: COLORS.primary.val,
    borderTopWidth: 2,
  },
  header: {
    paddingHorizontal: wp("3%"),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  heading: {
    fontSize: hp("3%"),
    color: COLORS.primary.val,
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
  },
  noTextSelected: {
    padding: hp("2%"),
    opacity: 0.5,
  },
});

export default EditorStyle;

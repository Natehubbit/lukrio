import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../common/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SlideCardStyle = StyleSheet.create({
  container: {
    minHeight: hp("40%"),
    backgroundColor: COLORS.white.val,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 10,
    zIndex: 100,
    // marginBottom: 25,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
    flex: 1,
  },
  titleContainer: {
    // flex: 1,
  },
  title: {
    color: COLORS.white.val,
    fontSize: hp("1.5%"),
  },
  body: {
    flex: 1,
    paddingVertical: wp("5%"),
    paddingHorizontal: wp("2%"),
    alignItems: "flex-start",
  },
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
    bottom: 0,
  },
  imgBack: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});

export default SlideCardStyle;

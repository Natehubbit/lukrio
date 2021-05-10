import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const ImageSelectorStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: hp("1%"),
    alignItems: "center",
    paddingVertical: hp("1.2%"),
    opacity: 0.7,
  },
  selected: {
    height: 50,
    width: 50,
  },
});

export default ImageSelectorStyle;

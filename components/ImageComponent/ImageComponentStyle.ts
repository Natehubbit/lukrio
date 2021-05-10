import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const ImageComponentStyle = StyleSheet.create({
  container: {
    height: hp("20%"),
    width: "80%",
    marginBottom: hp("2%"),
  },
  img: {
    height: "100%",
    left: 0,
    width: "100%",
  },
  actions: {
    flexDirection: "row",
    position: "absolute",
    zIndex: 5,
    right: -25,
    flexWrap: "wrap",
  },
});

export default ImageComponentStyle;

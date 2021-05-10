import { Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default class UtilService {
  static alterColor = (color: string, step: number) => {
    const intColor = parseInt(color.substr(1), 16);
    const hexColor = (intColor + step).toString(16);
    return `#${"0".repeat(6 - hexColor.length)}${hexColor}`;
  };

  static async requestImagePermission() {
    if (Platform.OS !== "web") {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert(
          "Sorry, we need camera roll permissions to make this work!"
        );
      }
    }
  }

  static async pickImage() {
    const res = await ImagePicker.launchImageLibraryAsync();
    if (res.cancelled === false) {
      return res.uri;
    }
    return null;
  }
}

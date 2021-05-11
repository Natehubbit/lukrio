"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", {
  value: true,
});
var moti_1 = require("moti");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var store_1 = require("./redux/store");
var Home_1 = __importDefault(require("./screens/Home"));
function App() {
  return (
    <react_redux_1.Provider store={store_1.store}>
      <moti_1.SafeAreaView style={[styles.root]}>
        <react_native_1.StatusBar />
        <Home_1.default />
      </moti_1.SafeAreaView>
    </react_redux_1.Provider>
  );
}
exports.default = App;
var styles = react_native_1.StyleSheet.create({
  root: {
    flex: 1,
  },
});

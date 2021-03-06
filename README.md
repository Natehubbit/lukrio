## 🚀 How to use

- Install packages with `yarn` or `npm install`.
- If you have native iOS code run `npx pod-install`
- Run `yarn start` to start the bundler.
- Open the project in a React runtime to try it:
  - iOS: [Client iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)

> 💡 This demo uses **experimental** Reanimated 2 support in Expo. [Learn more](https://docs.expo.io/versions/latest/sdk/reanimated/#experimental-support-for-v2).

### TypeScript

Moti is built with TypeScript and has first-class support. Here's how to add TS support to your project:

- Rename `App.js` ➜ `App.tsx`
- Run `expo start` -- TypeScript will be automatically configured.

> 💡 Learn more about [TypeScript in Expo](https://docs.expo.io/guides/typescript/)

### Adding Native Code

This project can be run from a web browser or the Expo client app. You may find that you want to add more native code later on. You can do this by ejecting the project and rebuilding it yourself.

- Run `expo eject` to create the native projects.
- You can still run your project in the web browser or Expo client, you just won't be able to access any new native modules you add.

> 💡 Learn more about [native code in Expo](https://docs.expo.io/workflow/customizing/)

### Publishing

- Deploy the native app to the App store and Play store using this guide: [Deployment](https://docs.expo.io/distribution/app-stores/).

## 📝 Notes

- [Expo Reanimated docs](https://docs.expo.io/versions/latest/sdk/reanimated)
- [Moti docs](https://moti.fyi/)
- [Reanimated docs](https://docs.swmansion.com/react-native-reanimated/docs/2.0.0-alpha.8/)
- Keep up with the creator of Moti [Fernando Rojo](https://twitter.com/FernandoTheRojo) for updates.

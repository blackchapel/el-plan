import Constants, { AppOwnership } from "expo-constants";
import * as Linking from "expo-linking";
import Web3Auth, { LOGIN_PROVIDER, OPENLOGIN_NETWORK } from "@web3auth/react-native-sdk";
import * as WebBrowser from "expo-web-browser";

const clientId = "BH43YV4vR2zkxpGAAkq1uQEFXTp4wSC_As4GfkhzfpjKCWpjlNfiBqxcdRn3QBwFOoq7L81nG-tKXCteHu8YWwM";

const web3auth = new Web3Auth(WebBrowser, {
  clientId,
  network: OPENLOGIN_NETWORK.TESTNET, // or other networks
  }
);

const resolvedRedirectUrl =
  Constants.appOwnership == AppOwnership.Expo || Constants.appOwnership == AppOwnership.Guest
    ? Linking.createURL("web3auth", {})
    : Linking.createURL("web3auth", { scheme: scheme });

const state = await web3auth.login({
  loginProvider: LOGIN_PROVIDER.EMAIL_PASSWORDLESS,
  redirectUrl: resolvedRedirectUrl,
  extraLoginOptions: {
    login_hint: "hello@web3auth.io",
  },
  curve: "secp256k1"
});

await web3auth.logout();


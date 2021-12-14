import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Login from "./screens/login";
import Loading from "./screens/loading";
import Dashboard from "./screens/dashboard";

import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: Loading,
  LoginScreen: Login,
  DashboardScreen: Dashboard
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}
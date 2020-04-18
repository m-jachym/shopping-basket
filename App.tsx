import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./src/Navigation";
import {Provider} from "react-redux";
import store from "./src/stores/store.js";


export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import AppContainer from "./src/Navigation/index";
import { UserContext } from "./useContext";



function App(): React.JSX.Element {

  return (
    <UserContext>
      <AppContainer/>
    </UserContext>
  );
}

const styles = StyleSheet.create({

});

export default App;

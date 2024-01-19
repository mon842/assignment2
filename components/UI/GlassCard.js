import React from "react";
import { StyleSheet, Text, View } from "react-native";


const GlassCard = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default GlassCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.9)',
    padding: 16,
    margin: 16,
    shadowColor: 'rgba(255, 255, 255, 0.3)',
    shadowOffset: {
      width: 4,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 8,
  },
})

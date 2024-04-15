import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import CurrentWeather from "./src/components/CurrentWeather";
const app = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

export default app;
import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";
const CurrentWeather = ({weatherData}) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    discription,
    message,
  } = styles;
  const {main: {temp, feels_like, temp_min, temp_max}, weather} = weatherData;
  const weatherCondition = weather[0]?.main;
  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition]?.backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>Feels like {feels_like}</Text>
        <RowText
          messageOne={`High: ${temp_max}`}
          messageTwo={`Low: ${temp_min}`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={discription}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    backgroundColor: "pink",
    flex: 2,
  },
  tempStyles: {
    color: "white",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "white",
  },
  highLow: {
    fontSize: 20,
    color: "white",
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  discription: {
    fontSize: 40,
    color: "white",
  },
  message: {
    fontSize: 30,
    color: "white",
  },
});

export default CurrentWeather;

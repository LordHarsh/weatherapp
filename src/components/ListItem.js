import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";
import moment from "moment";

const ListItem = ({ dt_txt, min, max, condition }) => {
  const { item, date, temp, dateTextWrapper } = styles;
  return (
    <View style={item}>
      <Feather name={weatherType[condition]?.icon} size={50} color="black" />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={date}>{moment(dt_txt).format("h:mm a")}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "indianred",
    borderRadius: 40,
  },
  temp: {
    fontSize: 20,
    color: "white",
  },
  date: {
    fontSize: 20,
    color: "white",
  },
  dateTextWrapper: {
    flexDirection: "column",
  },
});
export default ListItem;

import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "lightblue",
        },
        headerStyle: {
          backgroundColor: "lightblue",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
          color: "tomato",
        },
      }}
    >
      <Tab.Screen
        name={"Current"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"droplet"}
              size={25}
              color={focused ? "tomato" : "grey"}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={"Upcoming"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"clock"}
              size={25}
              color={focused ? "tomato" : "grey"}
            />
          ),
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={"City"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"home"}
              size={25}
              color={focused ? "tomato" : "grey"}
            />
          ),
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";


const UpcomingWeather = ({weatherData}) => {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        condition={item.weather[0]?.main}
        dt_txt={item?.dt_txt}
        min={item.main?.temp_min}
        max={item.main?.temp_max}
      />
    );
  };
  const { image, container } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/upcoming-background.jpg")}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue",
  },
    
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default UpcomingWeather;

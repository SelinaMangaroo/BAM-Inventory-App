import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LocationDetailScreen = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Location Name (Location Identifier)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default LocationDetailScreen;

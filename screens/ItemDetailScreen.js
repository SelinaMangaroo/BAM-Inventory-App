import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ItemDetailScreen = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Item Title (Item identifier)</Text>
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

export default ItemDetailScreen;

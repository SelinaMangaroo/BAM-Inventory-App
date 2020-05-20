import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import CheckBox from "react-native-check-box";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useState, useEffect } from "react";

const HomeScreen = (props) => {
  const [inventoryMode, setInventoryMode] = useState(false); //State for the Inventory Mode Checkbox

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.checkBox}>
        <Text>Inventory Mode</Text>
        <CheckBox
          onClick={() => {
            inventoryMode ? setInventoryMode(false) : setInventoryMode(true);
          }}
          isChecked={inventoryMode}
          checkedCheckBoxColor={"green"}
        />
      </View>
      <View style={styles.cameraBox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      <View style={styles.scanButton}>
        <Button
          title="Scan"
          onPress={() => setScanned(false)}
          accessibilityLabel="Click to scan barcode"
        />
      </View>
    </View>
  );
};

/*
{scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
*/

const styles = StyleSheet.create({
  cameraBox: {
    width: "100%",
    height: "70%",
    backgroundColor: "#000",
  },
  checkBox: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 5,
    justifyContent: "flex-end",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  scanButton: {
    width: "50%",
    alignSelf: "center",
    padding: 5,
  },
});

export default HomeScreen;

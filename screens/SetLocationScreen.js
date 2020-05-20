import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useState, useEffect } from "react";

const SetLocationScreen = (props) => {
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
      <View>
        <Text>Setting Location for ...</Text>
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

const styles = StyleSheet.create({
  cameraBox: {
    width: "100%",
    height: "70%",
    backgroundColor: "#000",
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

export default SetLocationScreen;

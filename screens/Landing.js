import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { Google } from "../components/Icon";
import Svg, { G, Path } from "react-native-svg";
const Landing = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={require("../assets/flame.png")} />
        <Text variant="displayLarge" style={{ fontWeight: "700" }}>
          Happening now
        </Text>
      </View>
      <View>
        <Button mode="outlined" onPress={() => {}} icon="google">
          Continue with Google
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
  },
  container: {
    marginTop: 50,
    marginBottom: 50,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Landing;

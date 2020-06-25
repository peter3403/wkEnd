import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../icon/back.png")} style={styles.back} />
          <Text style={styles.textStyle}>hompage</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "purple",
    justifyContent: "center",
    //alignItems: "center",
    height: 90,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2
  },
  button: {
    position:'absolute',
    width:150,
  },
  back:{
    top:30,
    left:20
  },
  textStyle: {
    color: "#fff",
    fontSize: 20,
    top:0,
    left:60
  },
});

export default Header;

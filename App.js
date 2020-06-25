import React, { useState, useEffect } from "react";
import { StyleSheet, Platform, View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Constants from "expo-constants";
import * as Location from "expo-location";
import { Icon } from "react-native-elements";
import metroJson from "./json/metro.json";

import Header from "./src/components/Header";


const App = () => {
  return (
    
        
    <ScrollView style={styles.container}>
      <Header/>
            <View>
            <TouchableOpacity>
                <View style={styles.cardSectionStyle}>
                  <Image source={require("./imgs/no1.jpg")} style={styles.img}/>
                  <Text style={styles.foodHeaderText}>馬醬韓國中華料理</Text>
                  <Text style={styles.foodText}>臺北市中山區八德路二段275號</Text>
                    <View style={styles.rank}>
                      <Image source={require("./imgs/gold.png")} style={styles.rankPic}/>
                      <Text style={styles.rankText}>第一名</Text>
                      <Image source={require("./imgs/location.png")} style={styles.loimg}/>
                    </View>                  
                </View>
            </TouchableOpacity> 
            </View>

            <View>
            <TouchableOpacity style={styles.food2}>
                <View style={styles.cardSectionStyle}>
                  <Image source={require("./imgs/no2.jpg")} style={styles.img}/>
                  <Text style={styles.foodHeaderText}>波記茶點心</Text>
                  <Text style={styles.foodText}>台北市忠孝東路4段248巷27號1樓</Text>
                    <View style={styles.rank}>
                      <Image source={require("./imgs/silver.png")} style={styles.rankPic}/>
                      <Text style={styles.rankText}>第二名</Text>
                      <Image source={require("./imgs/location.png")} style={styles.loimg}/>
                    </View>
                </View>
            </TouchableOpacity> 
            </View>

            <View>
            <TouchableOpacity style={styles.food2}>
                <View style={styles.cardSectionStyle}>
                  <Image source={require("./imgs/no3.jpg")} style={styles.img}/>
                  <Text style={styles.foodHeaderText}>黑岩古早味黑糖剉冰</Text>
                  <Text style={styles.foodText}>臺北市中山區錦州街195號</Text>
                    <View style={styles.rank}>
                      <Image source={require("./imgs/third.png")} style={styles.rankPic}/>
                      <Text style={styles.rankText}>第三名</Text>
                      <Image source={require("./imgs/location.png")} style={styles.loimg}/>
                    </View>
                </View>
            </TouchableOpacity> 
            </View>

            <View>
            <TouchableOpacity style={styles.food2}>
                <View style={styles.cardSectionStyle}>
                  <Image source={require("./imgs/no4.jpeg")} style={styles.img}/>
                  <Text style={styles.foodHeaderText}>萬華海鮮粥舖</Text>
                  <Text style={styles.foodText}>台北市萬華區永福街9號</Text>
                    <View style={styles.rank}>
                      <Image source={require("./imgs/dot.png")} style={styles.rankPic}/>
                      <Text style={styles.rankText}>第四名</Text>
                      <Image source={require("./imgs/location.png")} style={styles.loimg}/>
                    </View>
                </View>
            </TouchableOpacity> 
            </View>

            <View>
            <TouchableOpacity style={styles.food2}>
                <View style={styles.cardSectionStyle}>
                  <Image source={require("./imgs/no5.jpeg")} style={styles.img}/>
                  <Text style={styles.foodHeaderText}>食指大丼</Text>
                  <Text style={styles.foodText}>台北市士林區士東路336號</Text>
                    <View style={styles.rank}>
                      <Image source={require("./imgs/dot.png")} style={styles.rankPic}/>
                      <Text style={styles.rankText}>第五名</Text>
                      <Image source={require("./imgs/location.png")} style={styles.loimg}/>
                    </View>
                </View>
            </TouchableOpacity> 
            </View>

            <View>
            <TouchableOpacity style={styles.food2}>
                <View style={styles.cardSectionStyle}>
                  <Image source={require("./imgs/no6.jpg")} style={styles.img}/>
                  <Text style={styles.foodHeaderText}>御村日本廣島燒</Text>
                  <Text style={styles.foodText}>臺北市中山區撫順街12號</Text>
                    <View style={styles.rank}>
                      <Image source={require("./imgs/dot.png")} style={styles.rankPic}/>
                      <Text style={styles.rankText}>第六名</Text>
                      <Image source={require("./imgs/location.png")} style={styles.loimg}/>
                    </View>
                </View>
            </TouchableOpacity> 
            </View>

            <View>
            <TouchableOpacity style={styles.food2}>
                <View style={styles.cardSectionStyle}>
                  <Image source={require("./imgs/no7.jpg")} style={styles.img}/>
                  <Text style={styles.foodHeaderText}>海天香餃</Text>
                  <Text style={styles.foodText}>臺北市萬華區和平西路三段168號</Text>
                    <View style={styles.rank}>
                      <Image source={require("./imgs/dot.png")} style={styles.rankPic}/>
                      <Text style={styles.rankText}>第七名</Text>
                      <Image source={require("./imgs/location.png")} style={styles.loimg}/>
                    </View>
                </View>
            </TouchableOpacity> 
            </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex:1,
      
  },

  HeaderStyle: {
      
      justifyContent: "center",
      alignItems: "center",
      height: 70,
      paddingTop: 30,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      // Android Only
      elevation: 2
  },

  cardSectionStyle: {
      //paddingTop:20,
      height:170,
      backgroundColor: "#FFEBCD",
      margin:3,
      borderRadius:10
    },

  img:{
      top:20,
      position:"relative",
      height:120,
      width:120,
      left:20,
      borderWidth:1,
      borderColor:"gray",
      borderRadius:25,
    },

  foodHeaderText: {
      color:"#000",
      fontSize:28,
      position:'relative',
      top:-50,
      left:160
      //textAlign: "center",
  },

  foodText: {
    left:185,
    top:-30
  },
  rankPic:{
    left:1,
    width:25,
    height:25,
    top:2,
  },

  rank: {
    backgroundColor:"#fff",
    width:78,
    height:30,
    left:160,
    top:-140,
    borderWidth:1,
    borderColor:"gray",
    borderRadius:5
  },

  rankText: {
    
    left:27,
    top:-17,
    fontSize:14,
  },

  loimg: {
    width:20,
    height:20,
    top:52
  }
});

export default App;
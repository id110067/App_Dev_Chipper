import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HomeHeader() {
  return (
    <View>
      <Text
        style={{
          fontFamily: "Roboto",
          marginLeft: "5%",
          fontSize: 32,
          marginTop: "5%",
        }}
      >
        Good Morning, Abdur
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: "4%",
          paddingTop: "1%",
        }}
      >
        <Ionicons
          name="location-sharp"
          size={24}
          style={{ color: "#B2B2B2" }}
        />
        <Text style={{ fontFamily: "Roboto", fontSize: 18, color: "#B2B2B2" }}>
          Central and Western district
        </Text>
      </View>
    </View>
  )
}
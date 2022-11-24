import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BuyerBottomTabs({navigation}) {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Home" navigation={navigation} pageName='BuyerHome'/>
      <Icon icon="search" text="Browse" navigation={navigation} pageName='BuyerHome'/>
      <Icon icon="shopping-bag" text="Grocery" navigation={navigation} pageName='BuyerHome'/>
      <Icon icon="receipt" text="Orders" navigation={navigation} pageName='BuyerHome'/>
      <Icon icon="user" text="Account" navigation={navigation} pageName='Profile'/>
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity
  onPress={() => {props.navigation.navigate(props.pageName, {whichProfile: 'buyer'})}}
  >
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
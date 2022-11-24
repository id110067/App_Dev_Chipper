import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  Alert,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BuyerItem(props) {
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: props.imageHeight, width: props.imageWidth }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>{props.name}</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Price: <Text style={{ color: "#5FD068" }}>${props.price}</Text>
          </Text>
          <Text style={{ fontSize: 13, color: "gray" }}>
            Quantity sold: {props.ordersPlaced}{" "}
          </Text>
        </View>
        <TouchableOpacity onPress={() => Alert.alert("Add to cart is pressed")}>
        <View
          style={{
       
            justifyContent: "center",
            borderRadius: 15,
            flexDirection: "column",
            alignItems: "center",
            marginRight: '8%'
          }}
        >
          {/* <Button
            title="Add to cart"
            onPress={() => Alert.alert("Add to cart is pressed")}
          /> */}
          <FontAwesome5 name='shopping-cart' size={24} />
        </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

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
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartReducer";

export default function BuyerItem(props) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{
          width: "100%",
          height: props.imageHeight,
          width: props.imageWidth,
        }}
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
        {cart.some((value) => value.id == props.id) ? (
          <Button
            title="Remove from cart"
            onPress={() => removeItemFromCart(props)}
          />
        ) : (
          <TouchableOpacity onPress={() => addItemToCart(props)}>
            <View
              style={{
                justifyContent: "center",
                borderRadius: 15,
                flexDirection: "column",
                alignItems: "center",
                marginRight: "8%",
              }}
            >
              <FontAwesome5 name="shopping-cart" size={24} />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

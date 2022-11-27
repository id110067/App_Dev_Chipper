import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import SellerBottomTabs from "../components/sellerHome/SellerBottomTabs";
import { firebase } from "../config";

export default function ManagePickupOrders({ route, navigation }) {
  console.log(route.params.item);
  const [name, setName] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
          console.log("Name >> ", name.firstName);
        } else {
          console.log("does not exist");
        }
      });
  }, []);

  const arrangePickup = () => {
    Alert.alert("Order Pickup has been Scheduled!");
    navigation.navigate("ViewOrders");
  };

  return (
    <View style={{ flex: 1, marginTop: "5%" }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              paddingTop: "5%",
              paddingBottom: "5%",
              marginBottom: "1%",
              paddingLeft: "2%",
              paddingRight: "10%",
            }}
          >
            <View style={{ marginLeft: "5%" }}>
              <Text
                style={{
                  fontSize: 20,
                  marginBottom: "3%",
                  fontWeight: "bold",
                }}
              >
                Order ID: {route.params.item.id}
              </Text>
              <Text
                style={{ fontSize: 18, color: "#5FD068", fontWeight: "bold" }}
              >
                Order Date: {route.params.item.orderDate}
              </Text>
              <Text
                style={{ fontSize: 18, color: "#5FD068", fontWeight: "bold" }}
              >
                Customer Name: {name.firstName + " " + name.lastName}
              </Text>
              <Text
                style={{ fontSize: 18, color: "#5FD068", fontWeight: "bold" }}
              >
                Address: {route.params.item.address}
              </Text>
              <Text
                style={{ fontSize: 18, color: "#5FD068", fontWeight: "bold" }}
              >
                Mobile Number: {route.params.item.mobileNumber}
              </Text>
              <Text
                style={{ fontSize: 18, color: "#5FD068", fontWeight: "bold" }}
              >
                Email: {route.params.item.email}
              </Text>
            </View>
          </View>

          <View
            style={{
              paddingTop: "5%",
              paddingBottom: "5%",
              marginBottom: "1%",
            }}
          >
            {route.params.item.products.map((product, index) => (
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "white",
                  paddingTop: "5%",
                  paddingBottom: "5%",
                  marginBottom: "2%",
                  paddingLeft: "5%",
                  paddingRight: "30%",
                }}
                key={index}
              >
                <Image
                  source={{
                    uri: product.image,
                  }}
                  style={{ height: 100, width: 100 }}
                />
                <View style={{ marginLeft: "5%" }}>
                  <Text
                    style={{
                      fontSize: 20,
                      marginBottom: "3%",
                      fontWeight: "bold",
                    }}
                  >
                    {product.productName}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#5FD068",
                      fontWeight: "bold",
                    }}
                  >
                    ${product.price}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#5FD068",
                      fontWeight: "bold",
                    }}
                  >
                    Quantity: {product.quantity}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#5FD068",
                      fontWeight: "bold",
                    }}
                  >
                    Seller: {product.seller}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              paddingTop: "5%",
              paddingBottom: "5%",
              marginBottom: "1%",
              paddingLeft: "5%",
              paddingRight: "30%",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Order Total: ${route.params.item.orderTotal}
            </Text>
          </View>
          <View
            style={{
              paddingTop: "5%",
              paddingBottom: "5%",
              marginBottom: "3%",
              paddingLeft: "5%",
              paddingRight: "10%",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                height: 40,
                width: 125,
                backgroundColor: "black",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
              onPress={() => arrangePickup()}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 18, color: "orange" }}
              >
                Arrange Pickup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View>
        <SellerBottomTabs navigation={navigation} />
      </View>
    </View>
  );
}

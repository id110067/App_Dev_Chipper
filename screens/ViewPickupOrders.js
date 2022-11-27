import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { firebase } from "../config";
import SellerBottomTabs from "../components/sellerHome/SellerBottomTabs";

export default function ViewPickupOrders({ navigation }) {
  const [orders, setOrders] = useState([]);
  const ordersRef = firebase.firestore().collection("orders");

  useEffect(async () => {
    ordersRef.onSnapshot(
      (querySnapshot) => {
        const newOrders = [];
        querySnapshot.forEach((doc) => {
          const {
            address,
            email,
            mobileNumber,
            orderDate,
            orderTotal,
            products,
          } = doc.data();
          newOrders.push({
            id: doc.id,
            address,
            email,
            mobileNumber,
            orderDate,
            orderTotal,
            products,
          });
        });
        setOrders(newOrders);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <View style={{ flex: 1, marginTop: "5%" }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          {orders.map((item, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ManagePickupOrders", { item })}
              key={index}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "white",
                  paddingTop: "5%",
                  paddingBottom: "5%",
                  marginBottom: "1%",
                  paddingLeft: "2%",
                  paddingRight: "30%",
                }}
              >
                <Image
                  source={{
                    uri: item.products[0].image,
                  }}
                  style={{ height: 100, width: 100 }}
                />
                <View style={{ marginLeft: "5%" }}>
                  <Text
                    style={{
                      fontSize: 12,
                      marginBottom: "3%",
                      fontWeight: "bold",
                      color: "#B2B2B2",
                    }}
                  >
                    Order ID: {item.id}
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Items in order:{" "}
                    {item.products.map((product) => product.productName + ", ")}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      marginBottom: "2%",
                      fontWeight: "bold",
                      color: "#B2B2B2",
                      marginTop: "2%",
                    }}
                  >
                    Order Date: {item.orderDate}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#5FD068",
                      fontWeight: "bold",
                    }}
                  >
                    ${item.orderTotal}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View>
        <SellerBottomTabs navigation={navigation} />
      </View>
    </View>
  );
}

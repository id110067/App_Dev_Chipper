import { View, Text, ScrollView } from "react-native";
import React from "react";
import HomeHeader from "../components/sellerHome/HomeHeader";
import ItemSlider from "../components/sellerHome/ItemSlider";
import BottomTabs from "../components/sellerHome/SellerBottomTabs";
import ItemCatalog from "../components/sellerHome/ItemCatalog";

export default function SellerHome() {
  return (
    <View>
      <ScrollView>
        <HomeHeader />
        <View>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 18,
              fontWeight: "bold",
              marginLeft: "5%",
              marginTop: "5%",
            }}
          >
            Looking for a protein {'\n'}rich diet?
          </Text>
        </View>
        <ItemSlider />
        <View>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 18,
              fontWeight: "bold",
              marginLeft: "5%",
              marginTop: "5%",
            }}
          >
            Looking for a protein {'\n'}rich diet?
          </Text>
        </View>
        <ItemSlider />
        <View>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 18,
              fontWeight: "bold",
              marginLeft: "5%",
              marginTop: "5%",
            }}
          >
            Popular Products For You
          </Text>
        </View>
        <ItemCatalog />
        <BottomTabs />
      </ScrollView>
    </View>
  );
}

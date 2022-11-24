import { View, Text } from "react-native";
import React from "react";
import HomeHeader from "../components/home/HomeHeader";
import Item from "../components/home/Item";
import ItemSlider from "../components/home/ItemSlider";
import BottomTabs from "../components/home/BottomTabs";

export default function Home() {
  return (
    <View>
      <HomeHeader />
      <ItemSlider />
      <BottomTabs />
    </View>
  );
}

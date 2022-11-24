import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import SellerItem from "./SellerItem";

const items = [
  {
    name: "Chicken legs",
    image:
      "https://thumbs.dreamstime.com/b/raw-chicken-drumstick-white-background-raw-chicken-drumstick-193150228.jpg",
    price: "60",
    ordersPlaced: "100",
    imageHeight: 250,
    imageWidth: 250,
  },
  {
    name: "Beef",
    image:
      "https://media.istockphoto.com/id/505207430/photo/fresh-raw-beef-steak.jpg?s=612x612&w=0&k=20&c=QxOege3Io4h1TNJLtGYh71rxb29p1BfFcZvCipz4WVY=",
    price: "80",
    ordersPlaced: "100",
    imageHeight: 250,
    imageWidth: 250,
  },
  {
    name: "Lamb Chops",
    image:
      "https://media.istockphoto.com/id/105489252/photo/rack-of-lamb-with-rosemary.jpg?s=612x612&w=0&k=20&c=O1Vpfvq9_TZOsuy0QdaXyx3sFOvH3kGf29nPBZB_aHY=",
    price: "100",
    ordersPlaced: "100",
    imageHeight: 250,
    imageWidth: 250,
  },
  {
    name: "Eggs",
    image: "https://static.toiimg.com/photo/msid-68521300/68521300.jpg",
    price: "20",
    ordersPlaced: "100",
    imageHeight: 250,
    imageWidth: 250,
  },
];

export default function ItemSlider() {
  return (
    <>
      <ScrollView horizontal>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            style={{ marginBottom: 30 }}
          >
            <View
              style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
            >
              <SellerItem
                name={item.name}
                price={item.price}
                ordersPlaced={item.ordersPlaced}
                image={item.image}
                imageHeight={item.imageHeight}
                imageWidth={item.imageWidth}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}
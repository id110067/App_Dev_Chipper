import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import Item from "./BuyerItem";

const items = [
  {
    name: "Apple 1Kg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVz_0OfN04xK12UPPTKPvlr9tjzkMg4C4ORA&usqp=CAU",
    price: "60",
    ordersPlaced: "100",
    imageHeight: 250,
    imageWidth: 380,
  },
  {
    name: "Walch Antibacterial Handwash",
    image:
      "https://api.parknshop.com/medias/ANTIBAC-HAND-WASH-MOISTURIZING-419771.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3w1NjY3N3xpbWFnZS9qcGVnfGg0ZC9oYzIvOTMyMTYxNzc1MjA5NC9BTlRJQkFDIEhBTkQgV0FTSCBNT0lTVFVSSVpJTkctNDE5NzcxLmpwZ3w0NDFkODQyYWFkMmQ0MzIzYzZiOWQwNDkxMDQ4OTdkZTUyMTM2OTBiZmU2NDI2Y2JmN2I4OWE2MTUzNjNiMzc5",
    price: "80",
    ordersPlaced: "100",
    imageHeight: 250,
    imageWidth: 400,
  },
  {
    name: "Lays Potato Chips - Sour Cream and Onion",
    image:
      "https://indiangroceryhk.com/web/image/product.template/27/image_1920",
    price: "100",
    ordersPlaced: "100",
    imageHeight: 250,
    imageWidth: 400,
  },
  {
    name: "Borges Extra Virgin Olive Oil",
    image: "https://api.parknshop.com/medias/EXTRA-VIRGIN-OLIVE-OIL-370633.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxODM2NDF8aW1hZ2UvanBlZ3xoYzUvaDE0LzkzMTg0OTk0ODM2NzgvRVhUUkEgVklSR0lOIE9MSVZFIE9JTC0zNzA2MzMuanBnfDVkYjRjOGMzNTBhNzFiZDZkNjUzZTY1MjYwY2I2NjY1M2I4OGQ5NWE5NDZiZWVjYWNhNzNkZWVlNjQ4MTk3NTQ",
    price: "20",
    ordersPlaced: "100",
    imageHeight: 250,
    imageWidth: 400,
  },
];

export default function ItemCatalog() {
  return (
    <>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            style={{ marginBottom: 30 }}
          >
            <View
              style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
            >
              <Item
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
    </>
  );
}

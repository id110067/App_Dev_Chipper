import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import BuyerItem from "../components/buyerHome/BuyerItem";
import BuyerBottomTabs from "../components/buyerHome/BuyerBottomTabs";

export default function Search({ route, navigation }) {
  const items = [
    {
      name: "Apple 1Kg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVz_0OfN04xK12UPPTKPvlr9tjzkMg4C4ORA&usqp=CAU",
      price: "60",
      ordersPlaced: "100",
      imageHeight: 250,
      imageWidth: 350,
    },
    {
      name: "Walch Antibacterial Handwash",
      image:
        "https://api.parknshop.com/medias/ANTIBAC-HAND-WASH-MOISTURIZING-419771.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3w1NjY3N3xpbWFnZS9qcGVnfGg0ZC9oYzIvOTMyMTYxNzc1MjA5NC9BTlRJQkFDIEhBTkQgV0FTSCBNT0lTVFVSSVpJTkctNDE5NzcxLmpwZ3w0NDFkODQyYWFkMmQ0MzIzYzZiOWQwNDkxMDQ4OTdkZTUyMTM2OTBiZmU2NDI2Y2JmN2I4OWE2MTUzNjNiMzc5",
      price: "80",
      ordersPlaced: "100",
      imageHeight: 250,
      imageWidth: 350,
    },
    {
      name: "Lays Potato Chips - Sour Cream and Onion",
      image:
        "https://indiangroceryhk.com/web/image/product.template/27/image_1920",
      price: "100",
      ordersPlaced: "100",
      imageHeight: 250,
      imageWidth: 350,
    },
    {
      name: "Borges Extra Virgin Olive Oil",
      image:
        "https://api.parknshop.com/medias/EXTRA-VIRGIN-OLIVE-OIL-370633.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxODM2NDF8aW1hZ2UvanBlZ3xoYzUvaDE0LzkzMTg0OTk0ODM2NzgvRVhUUkEgVklSR0lOIE9MSVZFIE9JTC0zNzA2MzMuanBnfDVkYjRjOGMzNTBhNzFiZDZkNjUzZTY1MjYwY2I2NjY1M2I4OGQ5NWE5NDZiZWVjYWNhNzNkZWVlNjQ4MTk3NTQ",
      price: "20",
      ordersPlaced: "100",
      imageHeight: 250,
      imageWidth: 350,
    },
    {
      name: "Eggs",
      image: "https://static.toiimg.com/photo/msid-68521300/68521300.jpg",
      price: "20",
      ordersPlaced: "100",
      imageHeight: 250,
      imageWidth: 350,
    },
    {
      name: "Select Thai Fresh Brown Eggs",
      image:
        "https://api.parknshop.com/medias/THAI-FRESH-BROWN-EGGS-L-305579.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxMzA1NjF8aW1hZ2UvanBlZ3xoMTEvaDgwLzkzMTg3MjY2OTY5OTAvVEhBSSBGUkVTSCBCUk9XTiBFR0dTIEwtMzA1NTc5LmpwZ3wyZjRjOGFmYTAyMWNkOGE4MjkzYzIyYmMxOWI2Njg0MmVlYTZiNzY3Zjk3YjcwMTc2MjlkNDBlZWUxNDkxMmNl",
      price: "20",
      ordersPlaced: "100",
      imageHeight: 250,
      imageWidth: 350,
    },
    {
      name: "CP Fresh Eggs",
      image:
        "https://api.parknshop.com/medias/zoom-front-467205.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3w0NzM5Mjl8aW1hZ2UvanBlZ3xoMzEvaDRhLzk1MTIxNzY3NzkyOTQvUE5TSEstNDY3MjA1LWZyb250LmpwZ3xkZDg1NzY4MWQ1MGRmMjAzOTk0ZTRjNGE1Yzk0YmQzOTAxNzI2OTAzOWUxYmJkNjI0MGEwODhiOTA5NDg3ZjNi",
      price: "20",
      ordersPlaced: "100",
      imageHeight: 250,
      imageWidth: 350,
    },
  ];

  const [search, setSearch] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: "",
    },
  });
  const onSubmit = (data) => setSearch(data);

  return (
    <View style={{ marginTop: "10%", flex: 1 }}>
      <View style={{ alignItems: "center", flex: 1 }}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{
                borderWidth: 2,
                borderColor: "black",
                width: "80%",
                alignSelf: "center",
                height: 50,
                paddingLeft: 10,
                fontWeight: "bold",
                marginBottom: "4%",
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Search"
            />
          )}
          name="search"
        />
        {errors.search && (
          <Text style={{ color: "red", marginTop: "2%", marginBottom: "2%" }}>
            This is required.
          </Text>
        )}

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={{
            marginTop: 10,
            height: 50,
            width: 200,
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            alignItems: "center",
            marginBottom: "5%",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 22, color: "orange" }}>
            Search
          </Text>
        </TouchableOpacity>

        <ScrollView>
          <View>
            {items.map((item, index) => (
              <View
                style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
                key={index}
              >
                <BuyerItem
                  name={item.name}
                  price={item.price}
                  ordersPlaced={item.ordersPlaced}
                  image={item.image}
                  imageHeight={item.imageHeight}
                  imageWidth={item.imageWidth}
                />
              </View>
            ))}
            {/* <BuyerItem name='Eggs' price='60' ordersPlaced='10' image='https://static.toiimg.com/photo/msid-68521300/68521300.jpg' imageHeight={250} imageWidth={350} />
        <BuyerItem name='Eggs' price='60' ordersPlaced='10' image='https://static.toiimg.com/photo/msid-68521300/68521300.jpg' imageHeight={250} imageWidth={350} />
        <BuyerItem name='Eggs' price='60' ordersPlaced='10' image='https://static.toiimg.com/photo/msid-68521300/68521300.jpg' imageHeight={250} imageWidth={350} />
        <BuyerItem name='Eggs' price='60' ordersPlaced='10' image='https://static.toiimg.com/photo/msid-68521300/68521300.jpg' imageHeight={250} imageWidth={350} />
        <BuyerItem name='Eggs' price='60' ordersPlaced='10' image='https://static.toiimg.com/photo/msid-68521300/68521300.jpg' imageHeight={250} imageWidth={350} /> */}
          </View>
        </ScrollView>
      </View>
      <View>
        <BuyerBottomTabs navigation={navigation} />
      </View>
    </View>
  );
}

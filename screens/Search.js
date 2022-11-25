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
import {firebase} from "../config";

export default function Search({ route, navigation }) {
  const [items, setItems] = useState([]);
  const productsRef = firebase.firestore().collection("products");

  useEffect(async () => {
    productsRef.onSnapshot(
      (querySnapshot) => {
        const newItems = [];
        querySnapshot.forEach((doc) => {
          const {
            image,
            price,
            productName,
            quantityAvailable,
            quantitySold,
            seller,
          } = doc.data();
          newItems.push({
            id: doc.id,
            image,
            price,
            productName,
            quantityAvailable,
            quantitySold,
            seller,
          });
        });
        setItems(newItems);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

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

  useEffect(() => {
    const filteredItems = items.filter((item) => {
      return item.productName.toLowerCase().includes(search.search.toLowerCase());
    });
    setSearchedItems(filteredItems);
  }, [search]);

  console.log(searchedItems);

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
            {searchedItems.map((item, index) => (
              <View
                style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
                key={index}
              >
                <BuyerItem
                  name={item.productName}
                  price={item.price}
                  ordersPlaced={item.quantitySold}
                  image={item.image}
                  imageHeight={250}
                  imageWidth={350}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View>
        <BuyerBottomTabs navigation={navigation} />
      </View>
    </View>
  );
}

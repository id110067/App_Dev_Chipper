import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
import SellerBottomTabs from "../components/sellerHome/SellerBottomTabs";
import { firebase } from "../config";

const AddGroceryItem = ({ navigation }) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState();
  const [quantityAvailable, setQuantityAvailable] = useState();
  const [image, setImage] = useState("");
  const [name, setName] = useState([]);
  const [quantityFive, setQuantityFive] = useState();
  const [quantityTen, setQuantityTen] = useState();
  const [quantityFifteen, setQuantityFifteen] = useState();

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log("does not exist");
        }
      });
  }, []);

  function addProduct() {
    var product = {
      image: image,
      price: parseInt(price),
      productName: productName,
      quantityAvailable: parseInt(quantityAvailable),
      quantityFifteen: parseInt(quantityFifteen),
      quantityFive: parseInt(quantityFive),
      quantitySold: 0,
      quantityTen: parseInt(quantityTen),
      seller: name.firstName,
    };

    firebase
      .firestore()
      .collection("products")
      .add(product)
      .then((snapshot) => {
        product.id = snapshot.id;
        snapshot.set(product);
      })
      .then(() => addComplete(product))
      .catch((error) => console.log(error));
  }

  function addComplete() {
    Alert.alert("Item added successfully!");
    navigation.navigate("addItemSuccessful");
  }

  return (
    <View style={{ marginTop: "10%", flex: 1 }}>
      <View style={{ alignItems: "center", flex: 1 }}>
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
          placeholder="Enter Product Name"
          value={productName}
          onChangeText={(text) => setProductName(text)}
        />
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
          placeholder="Enter Product Quantity"
          keyboardType="numeric"
          value={quantityAvailable}
          onChangeText={(text) => setQuantityAvailable(text)}
        />

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
          placeholder="Add Product Image"
          value={image}
          onChangeText={(text) => setImage(text)}
        />
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
          placeholder="Enter Product Price"
          keyboardType="numeric"
          value={price}
          onChangeText={(text) => setPrice(text)}
        />

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
          placeholder="Enter Quantity Required for 5% Discount"
          keyboardType="numeric"
          value={quantityFive}
          onChangeText={(text) => setQuantityFive(text)}
        />

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
          placeholder="Enter Quantity Required for 10% Discount"
          keyboardType="numeric"
          value={quantityTen}
          onChangeText={(text) => setQuantityTen(text)}
        />

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
          placeholder="Enter Quantity Required for 15% Discount"
          keyboardType="numeric"
          value={quantityFifteen}
          onChangeText={(text) => setQuantityFifteen(text)}
        />

        <TouchableOpacity
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
          onPress={() => addProduct()}
        >
          <Text style={{ fontWeight: "bold", fontSize: 22, color: "orange" }}>
            Add Product
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <SellerBottomTabs navigation={navigation} />
      </View>
    </View>
  );
};

export default AddGroceryItem;

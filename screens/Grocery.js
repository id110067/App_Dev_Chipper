import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import BuyerBottomTabs from "../components/buyerHome/BuyerBottomTabs";

const Grocery = ({ navigation }) => {
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
              paddingRight: "30%",
            }}
          >
            <Image
              source={{
                uri: "https://indiangroceryhk.com/web/image/product.template/27/image_1920",
              }}
              style={{ height: 100, width: 100 }}
            />
            <View style={{ marginLeft: "5%" }}>
              <Text
                style={{ fontSize: 20, marginBottom: "3%", fontWeight: "bold" }}
              >
                Lays Potato Chips - Sour Cream and Onion
              </Text>
              <Text
                style={{ fontSize: 18, color: "#5FD068", fontWeight: "bold" }}
              >
                $30
              </Text>
            </View>
          </View>
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
                uri: "https://api.parknshop.com/medias/ANTIBAC-HAND-WASH-MOISTURIZING-419771.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3w1NjY3N3xpbWFnZS9qcGVnfGg0ZC9oYzIvOTMyMTYxNzc1MjA5NC9BTlRJQkFDIEhBTkQgV0FTSCBNT0lTVFVSSVpJTkctNDE5NzcxLmpwZ3w0NDFkODQyYWFkMmQ0MzIzYzZiOWQwNDkxMDQ4OTdkZTUyMTM2OTBiZmU2NDI2Y2JmN2I4OWE2MTUzNjNiMzc5",
              }}
              style={{ height: 100, width: 100 }}
            />
            <View style={{ marginLeft: "5%" }}>
              <Text
                style={{ fontSize: 20, marginBottom: "3%", fontWeight: "bold" }}
              >
                Walch Antibacterial Handwash
              </Text>
              <Text
                style={{ fontSize: 18, color: "#5FD068", fontWeight: "bold" }}
              >
                $30
              </Text>
            </View>
          </View>
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
                uri: "https://api.parknshop.com/medias/EXTRA-VIRGIN-OLIVE-OIL-370633.jpg?context=bWFzdGVyfHBuc2hrL2ltYWdlc3wxODM2NDF8aW1hZ2UvanBlZ3xoYzUvaDE0LzkzMTg0OTk0ODM2NzgvRVhUUkEgVklSR0lOIE9MSVZFIE9JTC0zNzA2MzMuanBnfDVkYjRjOGMzNTBhNzFiZDZkNjUzZTY1MjYwY2I2NjY1M2I4OGQ5NWE5NDZiZWVjYWNhNzNkZWVlNjQ4MTk3NTQ",
              }}
              style={{ height: 100, width: 100 }}
            />
            <View style={{ marginLeft: "5%" }}>
              <Text
                style={{ fontSize: 20, marginBottom: "3%", fontWeight: "bold" }}
              >
                Borges Extra Virgin Olive Oil
              </Text>
              <Text
                style={{ fontSize: 18, color: "#5FD068", fontWeight: "bold" }}
              >
                $30
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              paddingTop: "10%",
              paddingBottom: "5%",
              marginBottom: "1%",
              paddingLeft: "2%",
              paddingRight: "30%",
              marginTop: "10%",
            }}
          >
            <Text
              style={{
                position: "absolute",
                right: 70,
                fontSize: 20,
                fontWeight: "bold",
                top: 15,
              }}
            >
              Order Total:{" "}
            </Text>
            <Text
              style={{
                position: "absolute",
                right: 25,
                fontSize: 20,
                fontWeight: "bold",
                color: "red",
                top: 15,
              }}
            >
              $90
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: "2%",
              paddingLeft: "14%",
              marginBottom: "4%",
            }}
          >
            <TouchableOpacity
              onPress={() => Alert.alert("Continue to Checkout is pressed")}
              style={{
                marginTop: 10,
                height: 50,
                width: 300,
                backgroundColor: "black",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                alignItems: "center",
                marginBottom: "5%",
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 22, color: "orange" }}
              >
                Continue to Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View>
        <BuyerBottomTabs navigation={navigation} />
      </View>
    </View>
  );
};

export default Grocery;

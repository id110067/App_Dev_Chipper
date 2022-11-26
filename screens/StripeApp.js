import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";

//ADD localhost address of your server
const API_URL = "http://10.68.11.73:8004";

const StripeApp = ({ route, navigation }) => {
  const cart = useSelector((state) => state.cart.cart);
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ total: route.params.total * 100 }),
    });
    const { clientSecret, error } = await response.json();
    return { clientSecret, error };
  };

  const handlePayPress = async () => {
    //1.Gather the customer's billing information (e.g., email)
    if (!cardDetails?.complete || !email || !address || !mobile) {
      Alert.alert("Please enter all the details");
      return;
    }
    const billingDetails = {
      email: email,
      address: address,
      mobile: mobile,
    };
    //2.Fetch the intent client secret from the backend
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
      //2. confirm the payment
      if (error) {
        console.log("Unable to process payment");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          paymentMethodType: "Card",
          billingDetails: billingDetails,
        });
        if (error) {
          alert(`Payment Confirmation Error ${error.message}`);
        } else if (paymentIntent) {
          alert("Payment Successful");
          console.log("Payment successful ", paymentIntent);
          console.log(billingDetails);
        }
      }
    } catch (e) {
      console.log(e);
    }
    //3.Confirm the payment with the card details
  };

//   setAddressMobile = () => {
//     setAddress(data.address);
//     setMobile(data.mobile);
//   }

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//     },
//   });
//   const onSubmit = (data) => setAddressMobile(data);


  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={{ flex: 1 }}>
            {cart.map((item, index) => (
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
                key={index}
              >
                <Image
                  source={{
                    uri: item.image,
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
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#5FD068",
                      fontWeight: "bold",
                    }}
                  >
                    ${item.price}
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Quantity: {item.quantity}
                  </Text>
                </View>
              </View>
            ))}

            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                paddingTop: "10%",
                paddingBottom: "5%",
                marginBottom: "1%",
                paddingLeft: "2%",
                paddingRight: "30%",
                marginTop: "5%",
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
                Order Total: $
              </Text>
              {/* {cart.map((item, index) => (

            )} */}
              <Text
                style={{
                  position: "absolute",
                  right: 35,
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "red",
                  top: 15,
                }}
              >
                {parseFloat(route.params.total) / 100}
              </Text>
            </View>
          </View>
        </View>
        {/* <View style={{ alignItems: "center", flex: 1 }}>
        <Text>Enter your Address</Text>
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
                placeholder="Address"
              />
            )}
            name="address"
          />
          {errors.search && (
            <Text style={{ color: "red", marginTop: "2%", marginBottom: "2%" }}>
              This is required.
            </Text>
          )}

          <Text>Enter your Mobile Number</Text>
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
                placeholder="Mobile Number"
              />
            )}
            name="mobile"
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
              Save
            </Text>
          </TouchableOpacity>
        </View> */}
        <TextInput
          autoCapitalize="none"
          placeholder="E-mail"
          keyboardType="email-address"
          onChange={(value) => setEmail(value.nativeEvent.text)}
          style={styles.input}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="Address"
          onChange={(value) => setAddress(value.nativeEvent.text)}
          style={styles.input}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="Mobile Number"
          keyboardType="numeric"
          onChange={(value) => setMobile(value.nativeEvent.text)}
          style={styles.input}
        />
        <CardField
          postalCodeEnabled={true}
          placeholder={{
            number: "4242 4242 4242 4242",
          }}
          cardStyle={styles.card}
          style={styles.cardContainer}
          onCardChange={(cardDetails) => {
            setCardDetails(cardDetails);
          }}
        />
        <Button onPress={handlePayPress} title="Pay" disabled={loading} />
      </View>
    </ScrollView>
  );
};
export default StripeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },
  input: {
    backgroundColor: "#efefefef",

    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
});

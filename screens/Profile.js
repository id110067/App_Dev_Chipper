import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  Alert,
  ScrollView
} from "react-native";
import { firebase } from "../config";
import profilePhoto from "../assets/profile-photo.png";
import BuyerBottomTabs from "../components/buyerHome/BuyerBottomTabs";
import SellerBottomTabs from "../components/sellerHome/SellerBottomTabs";
import logo from "../assets/logo-removebg.png";
import chipper from "../assets/chipper.png";

const Profile = ({ route, navigation}) => {
  if (route.params.whichProfile === "buyer") {
    return (
      <>
        <BuyerProfile navigation={navigation} />
        <BuyerBottomTabs navigation={navigation} />
      </>
    );
  } else {
    return (
      <>
        <SellerProfile navigation={navigation} />
        <SellerBottomTabs navigation={navigation}/>
      </>
    );
  }
};

export default Profile;

const BuyerProfile = ({navigation}) => {
  const [name, setName] = useState([]);

  // change the password
  const changePassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(firebase.auth().currentUser.email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        alert(error);
      });
  };

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

  return (
    <View style={{ flex: 1, marginTop: '15%' }}>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={styles.container}>
        <View style={{ position: "absolute", right: 20 }}>
          <TouchableOpacity
            onPress={() => {
              firebase.auth().signOut();
            }}
            style={{
              marginTop: 20,
              height: 40,
              width: 100,
              backgroundColor: "black",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "orange" }}>
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            // position: "relative",
            // top: 100,
            alignItems: "center",
            marginTop: "4%",
          }}
        >
          <Image
            source={profilePhoto}
            style={{
              height: 120,
              width: 120,
              borderRadius: 40,
              marginBottom: "2%",
            }}
          />
          <Text style={{ fontSize: 32, fontWeight: "bold" }}>
            Hello, {name.firstName}
          </Text>
          <Text>Age: 20</Text>
          <Text>Hobby: Playing F1</Text>
          <Text>Date of Birth: 01/01/2000</Text>
          <TouchableOpacity
            onPress={() => Alert.alert("Manage/Edit Profile is pressed")}
            style={styles.button}
          >
            <Text style={{ fontWeight: "bold", fontSize: 22, color: "orange" }}>
              Manage/Edit Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ViewOrders")}
            style={styles.button}
          >
            <Text style={{ fontWeight: "bold", fontSize: 22, color: "orange" }}>
              Manage Orders
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              changePassword();
            }}
            style={styles.button}
          >
            <Text style={{ fontWeight: "bold", fontSize: 22, color: "orange" }}>
              Change Password
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: '10%'}}>
            <Image source={logo} style={{height: 50, width: 50, marginRight: '3%'}} />
            <Image source={chipper} style={{height: 31, width: 122, marginTop: '2%'}} />
          </View>
          <Text style={{marginTop: '2%', fontWeight: 'bold'}}>Version 1.0.0</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
    </View>
  );
};

const SellerProfile = ({navigation}) => {
  const [name, setName] = useState([]);

  // change the password
  const changePassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(firebase.auth().currentUser.email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          // console.log("Testing >> ", snapshot.data())
          setName(snapshot.data());
          // console.log("Name >> ", name.firstName)
        } else {
          console.log("does not exist");
        }
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={styles.container}>
        <View style={{ position: "absolute", right: 20 }}>
          <TouchableOpacity
            onPress={() => {
              firebase.auth().signOut();
            }}
            style={{
              marginTop: 50,
              height: 40,
              width: 100,
              backgroundColor: "black",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "orange" }}>
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            // position: "relative",
            // top: 100,
            alignItems: "center",
            marginTop: "4%",
          }}
        >
          <Image
            source={profilePhoto}
            style={{
              height: 120,
              width: 120,
              borderRadius: 40,
              marginBottom: "2%",
            }}
          />
          <Text style={{ fontSize: 32, fontWeight: "bold" }}>
            Hello, {name.firstName}
          </Text>
          <Text>Age: 20</Text>
          <Text>Hobby: Playing F1</Text>
          <Text>Date of Birth: 01/01/2000</Text>
          <TouchableOpacity
            onPress={() => Alert.alert("Manage/Edit Profile is pressed")}
            style={styles.button}
          >
            <Text style={{ fontWeight: "bold", fontSize: 22, color: "orange" }}>
              Manage/Edit Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ViewPickupOrders")}
            style={styles.button}
          >
            <Text style={{ fontWeight: "bold", fontSize: 22, color: "orange" }}>
              Manage Pickup Orders
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              changePassword();
            }}
            style={styles.button}
          >
            <Text style={{ fontWeight: "bold", fontSize: 22, color: "orange" }}>
              Change Password
            </Text>
          </TouchableOpacity>
          <View>

          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginTop: 15,
    height: 50,
    width: 250,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
});

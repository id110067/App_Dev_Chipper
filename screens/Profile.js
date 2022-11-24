import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button,
  View,
  Image,
  Alert,
} from "react-native";
import { firebase } from "../config";
import profilePhoto from "../assets/profile-photo.png";
import BuyerBottomTabs from "../components/buyerHome/BuyerBottomTabs";
import SellerBottomTabs from "../components/sellerHome/SellerBottomTabs";

const Profile = ({ route }) => {
  if (route.params.whichProfile === "buyer") {
    return (
      <>
        <BuyerProfile />
        <BuyerBottomTabs />
      </>
    );
  } else {
    return (
      <>
        <SellerProfile />
        <SellerBottomTabs />
      </>
    );
  }
};

export default Profile;

const BuyerProfile = () => {
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
          position: "relative",
          top: 100,
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
          onPress={() => Alert.alert("Manage Orders is pressed")}
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
      </View>
    </SafeAreaView>
  );
};

const SellerProfile = () => {
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
          position: "relative",
          top: 100,
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
          onPress={() => Alert.alert("Manage Pickup Orders is pressed")}
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginTop: 30,
    height: 50,
    width: 250,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
  },
});

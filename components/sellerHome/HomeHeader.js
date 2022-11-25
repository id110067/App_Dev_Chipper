import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import { firebase } from '../../config';

export default function HomeHeader() {
  const [name, setName] = useState([]);

  useEffect(() => {
    firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get()
    .then((snapshot) =>{
      if(snapshot.exists){
          setName(snapshot.data())
          // console.log("Name >> ", name.firstName)
      }
      else {
        console.log('does not exist')
      }
  })
  }, [])

  return (
    <View>
      <Text
        style={{
          fontFamily: "Roboto",
          marginLeft: "5%",
          fontSize: 32,
          marginTop: "5%",
        }}
      >
        Good Morning, {name.firstName}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: "4%",
          paddingTop: "1%",
        }}
      >
        <Ionicons
          name="location-sharp"
          size={24}
          style={{ color: "#B2B2B2" }}
        />
        <Text style={{ fontFamily: "Roboto", fontSize: 18, color: "#B2B2B2" }}>
          Central and Western district
        </Text>
      </View>
    </View>
  )
}
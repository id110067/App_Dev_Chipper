import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { firebase } from "../config";

import Login from "../components/StartScreen/Login";
import Registration from "../components/StartScreen/Registration";
import Header from "../components/StartScreen/Header";
import Profile from "./Profile";
import BuySell from "../components/StartScreen/BuySell";
import Home from "./BuyerHome";
import SellerHome from "./SellerHome";
import Chat from "./Chat";
import Grocery from "./Grocery";
import AddGroceryItem from "./AddGroceryItem";
import Search from "./Search";
import ChatBot from "./chatbot/ChatBot";

const Stack = createStackNavigator();

function AppLogin() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => <Header name="Chipper" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#000",
              shadowColor: "#eee",
              elevation: 25,
            },
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerTitle: () => <Header name="Chipper" />,
            headerStyle: {
              height: 150,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#000",
              shadowColor: "#eee",
              elevation: 25,
            },
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BuySell"
        component={BuySell}
        options={{
          headerTitle: () => <Header name="Buy or Sell" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#000",
            shadowColor: "#eee",
            elevation: 25,
          },
        }}
      />
      <Stack.Screen
        name="message"
        component={Chat}
        options={{
          headerTitle: () => <Header name="Chat Area" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#000',
            shadowColor: '#eee',
            elevation: 25
          }
        }}
      />
      <Stack.Screen
        name="chatbot"
        component={ChatBot}
        options={{
          headerTitle: () => <Header name="Chat Bot" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#000',
            shadowColor: '#eee',
            elevation: 25
          }
        }}
      />
      <Stack.Screen
        name="grocery"
        component={Grocery}
        options={{
          headerTitle: () => <Header name="Grocery" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#000',
            shadowColor: '#eee',
            elevation: 25
          }
        }}
      />
      <Stack.Screen
        name="addGroceryItems"
        component={AddGroceryItem}
        options={{
          headerTitle: () => <Header name="Add Items" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#000',
            shadowColor: '#eee',
            elevation: 25
          }
        }}
      />


    <Stack.Screen
        name="BuyerSell"
        component={SellerHome}
        options={{
          headerTitle: () => <Header name="Home" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#000',
            shadowColor: '#eee',
            elevation: 25
          }
        }}
      />

    <Stack.Screen
        name="search"
        component={Search}
        options={{
          headerTitle: () => <Header name="search" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#000',
            shadowColor: '#eee',
            elevation: 25
          }
        }}
      />

      <Stack.Screen
        name="BuyerHome"
        component={Home}
        options={{
          headerTitle: () => <Header name="Home" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#000",
            shadowColor: "#eee",
            elevation: 25,
          },
        }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: () => <Header name="Profile" />,
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#000",
            shadowColor: "#eee",
            elevation: 25,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    // <ScrollView contentContainerStyle={{ flexGrow: 1 }}></ScrollView>
    // <ScrollView >
    <NavigationContainer>
      <AppLogin />
    </NavigationContainer>
  );
};

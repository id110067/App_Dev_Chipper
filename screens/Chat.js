import { View, Text, ScrollView, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ChatBot from "./chatbot/ChatBot"

import BuyerBottomTabs from "../components/buyerHome/BuyerBottomTabs";

const Chat = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, marginTop: "5%" }}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Text> Chat Area </Text>
        </View>
      </ScrollView>
      <View>
        <BuyerBottomTabs navigation={navigation} />
      </View>
    </View>
  )
}

export default Chat
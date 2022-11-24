import { View, Text } from 'react-native';
import React from 'react';

import BuyerBottomTabs from "../components/buyerHome/BuyerBottomTabs";

const Chat = ({navigation}) => {
  return (
    <View>
        <BuyerBottomTabs navigation={navigation} />
    </View>
  )
}

export default Chat
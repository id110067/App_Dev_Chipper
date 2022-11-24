import { View, Text } from 'react-native';
import React from 'react';
import SellerBottomTabs from "../components/sellerHome/SellerBottomTabs";

const AddGroceryItem = ({navigation}) => {
  return (
    <View>
      <SellerBottomTabs navigation={navigation} />
    </View>
  )
}

export default AddGroceryItem
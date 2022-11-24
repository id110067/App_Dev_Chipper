import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const BuySell = ({ navigation }) => {
  return (
    <View style={styles.fixToText} >
        <TouchableOpacity
            style={styles.buttonBuy}
            onPress={() => {navigation.navigate('BuyHome')}}
        >
            <Text style={{fontWeight:'bold', fontSize:22,}}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={()=> Alert.alert('Left button pressed')}
            style={styles.buttonSell}
        >
            <Text style={{fontWeight:'bold', fontSize:22, }}>Sell</Text>
        </TouchableOpacity>
    </View>
  )
}

export default BuySell

const styles = StyleSheet.create({
    fixToText: {
      flexDirection: 'row',
      marginTop: '50%',
      marginLeft: '10%',
    },
    buttonBuy: {
        marginTop:50,
        marginRight: 20,
        height:70,
        width:150,
        backgroundColor:'#fff',
        borderColor:'#fd841f !important',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
      },
    buttonSell: {
        marginTop:50,
        height:70,
        width:150,
        backgroundColor:'#fd841f',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
      }
  });
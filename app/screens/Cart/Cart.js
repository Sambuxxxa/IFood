import React, {useContext, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity,} from 'react-native';
import {grey, nightBlue} from "../../data/COLORS";
import {MainContext} from "../../../App";
import CartItem from "./components/CartItem";
import ClearCart from "./components/ClearCart";
import FinishedCart from "./components/FinishedCart";
import AntDesign from "react-native-vector-icons/AntDesign";


export default function Cart() {
  const data = useContext(MainContext)
  const cartList = data.cartList

  const [isFinished, setIsFinished] = useState(false);


  if (cartList.length === 0) {
    return (<ClearCart/>)
  } else {
    if (isFinished) {
      return (
        <FinishedCart setIsFinished={setIsFinished}/>
      )
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Корзина:</Text>

          <FlatList data={cartList} renderItem={({item}) => (
            <CartItem item={item}/>
          )}/>

          <TouchableOpacity
            style={styles.containerBut}
            onPressOut={() => setIsFinished(true)}>
            <Text style={{color: grey, fontWeight: '400', marginRight: 5}}>Оформить заказ</Text>
            <AntDesign name="right" size={24} color={grey}/>
          </TouchableOpacity>
        </SafeAreaView>
      )
    }
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: nightBlue,
  },
  containerBut: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 50,
    width: 200,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginVertical: 10
  },
  title: {
    color: '#fff',
    margin: 10,
    fontSize: 20,
    fontWeight: '300'
  }
});

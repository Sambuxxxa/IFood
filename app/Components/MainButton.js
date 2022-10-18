import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity,} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {blue, grey} from "../data/COLORS";
import {MainContext} from "../../App";

export default function MainButton({item}) {
  const data = useContext(MainContext)
  const click = () => {
    if (data.cartList.includes(item)) {
      data.deleteFromCartList(item);
    } else {
      data.addToCartList(item)
    }
  }

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: data.cartList.includes(item) ? blue : '#fff'}]}
      onPress={() => click()}>
      <MaterialIcons name="add-shopping-cart" size={24} color={data.cartList.includes(item) ? "#fff" : grey}/>
      <Text style={{color: data.cartList.includes(item) ? "#fff" : grey, fontWeight: '400'}}>Добавить</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 150,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

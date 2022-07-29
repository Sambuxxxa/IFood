import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity,} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {blue, grey} from "../data/COLORS";
import {MainContext} from "../../App";

export default function MainButton({item}) {
  const data = useContext(MainContext)
  const [butColor, setButColor] = useState({bg: '#fff', items: grey});

  const click = () => {
    const array = data.cartList.filter(box => {
      if (box.id === item.id) {
        return box;
      }
    })

    if (array.length === 0) {
      data.addToCartList(item)
      setButColor({bg: blue, items: '#fff'});
    } else {
      data.deleteFromCartList(item);
      setButColor({bg: '#fff', items: grey});
    }
  }

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: butColor.bg}]}
      onPress={() => click()}>
      <MaterialIcons name="add-shopping-cart" size={24} color={butColor.items}/>
      <Text style={{color: butColor.items, fontWeight: '400'}}>Добавить</Text>
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

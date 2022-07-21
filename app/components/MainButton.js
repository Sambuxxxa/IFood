import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity,} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {blue, grey} from "../data/COLORS";
import {MainContext} from "../../App";

export default function MainButton({item}) {

  const [color, setColor] = useState({bg: '#fff', items: grey});
  const data = useContext(MainContext)

  const [isInCart, setIsInCart] = useState(false);
  useEffect(() => {
    return () => {
      setIsInCart(false)
    };
  }, [data.clearButs]);

  const click = () => {
    if (isInCart) {
      setColor({bg: '#fff', items: grey});
      data.deleteFromCartList(item);
      setIsInCart(false);
    } else {
      setColor({bg: blue, items: '#fff'});
      data.addToCartList(item);
      setIsInCart(true);
    }
  }

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: color.bg}]}
      onPress={() => click()}>
      <MaterialIcons name="add-shopping-cart" size={24} color={color.items}/>
      <Text style={{color: color.items, fontWeight: '400'}}>Добавить</Text>
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

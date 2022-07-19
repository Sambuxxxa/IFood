import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity,} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {blue, grey} from "../data/COLORS";

export default function MainButton() {

  const [color, setColor] = useState({bg: '#fff', items: grey});

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: color.bg}]}
      onPressIn={() => setColor({bg: blue, items: '#fff'})}
      onPressOut={() => setColor({bg: '#fff', items: grey})}>
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

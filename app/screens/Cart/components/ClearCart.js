import React from 'react';
import {Image, StyleSheet, Text, View,} from 'react-native';
import {nightBlue} from "../../../data/COLORS";

export default function ClearCart() {

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/cart.png')} style={styles.img}/>
      <Text style={styles.title}>Ваша корзина пустая...</Text>
      <Text style={styles.title}>Добавьте что-то, что бы оформить заказ!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: nightBlue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 120,
    width: 120,
  },
  title: {
    fontSize: 15,
    fontWeight: "300",
    color: '#fff',
    marginHorizontal: 50,
    textAlign: 'center'
  },
});

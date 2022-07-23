import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {grey, nightBlue} from "../../../data/COLORS";
import {MainContext} from "../../../../App";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function FinishedCart({setIsFinished}) {
  const data = useContext(MainContext)

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/shop.png')} style={styles.img}/>
      <Text style={styles.title}>Покупка успешно завершена!</Text>
      <Text style={styles.title}>Ваш заказ скоро будет передан курьерской службе</Text>
      <TouchableOpacity
        style={styles.containerBut}
        onPressOut={() => {
          data.setCartList([])
          setIsFinished(false)
        }}>
        <AntDesign name="left" size={24} color={grey}/>
        <Text style={{color: grey, fontWeight: '400', marginLeft: 5}}>Купить ещё</Text>
      </TouchableOpacity>
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
  containerBut: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 50,
    width: 150,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginVertical: 10
  },
});

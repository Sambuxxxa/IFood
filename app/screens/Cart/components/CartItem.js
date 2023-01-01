import React, {useContext, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {grey} from "../../../data/COLORS";
import {MainContext} from "../../../../App";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function CartItem({item}) {
  const data = useContext(MainContext)
  const [count, setCount] = useState(item.amount);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        data.setSelectedItem(item);
        data.setIsVisibleDM(true)
      }}>
      <Image source={item.img} style={{height: 90, width: 90, alignSelf: 'center', marginHorizontal: 5, flex: 3}}/>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.type}</Text>
        <Text style={styles.desc}>1x = ₴{item.price}</Text>
      </View>
      <View style={styles.butsBox}>
        <TouchableOpacity
          onPress={() => data.deleteFromCartList(item)}>
          <Ionicons name="close-outline" size={24} color="#fff"/>
        </TouchableOpacity>
        <Text style={styles.desc}>{count}х</Text>
        <View style={styles.plusMinus}>
          <TouchableOpacity
            style={styles.minus}
            onPress={() => {
              if (count === 1) {
                data.deleteFromCartList(item)
              } else {
                setCount(prevState => prevState - 1)
              }
            }}>
            <AntDesign name="minus" size={15} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.plus}
            onPress={() => setCount(prevState => prevState + 1)}>
            <AntDesign name="plus" size={15} color="white"/>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: grey,
    height: 100,
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  titleBox: {
    flex: 5,
    height: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: '#fff',
  },
  desc: {
    fontSize: 12,
    fontWeight: "200",
    color: '#fff',
  },
  butsBox: {
    flex: 4,
    height: 100,
    alignItems: "center",
    justifyContent: 'space-evenly'
  },
  plusMinus: {
    flexDirection: 'row',
    height: 25,
    width: 55,
  },
  plus: {
    height: 25,
    width: 25,
    marginLeft: 5,
    backgroundColor: 'grey',
    borderRadius: 15,
    alignItems: "center",
    justifyContent: 'center'
  },
  minus: {
    height: 25,
    width: 25,
    backgroundColor: 'grey',
    borderRadius: 15,
    alignItems: "center",
    justifyContent: 'center'
  }
});

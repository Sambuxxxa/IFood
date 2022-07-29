import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {grey} from "../../../data/COLORS";
import MainButton from "../../../coreComponents/MainButton";
import {MainContext} from "../../../../App";
import Foundation from "react-native-vector-icons/Foundation";

export default function LikedItem({item}) {
  const data = useContext(MainContext)
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        data.setSelectedItem(item);
        data.setIsVisibleDM(true)
      }}
    >
      <View style={styles.mainBox}>
        <Image source={item.img} style={styles.img}/>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.title2}>₴{item.price}</Text>

        <View style={{top: -40}}><MainButton item={item}/></View>
        <TouchableOpacity
          style={[styles.butBox, {marginRight: 80, marginTop: 20}]}
          onPress={() => {
            data.deleteFromLikedList(item)
          }}>
          <Foundation name="heart" size={24} color={'red'}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    height: 300,
    width: 150,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  mainBox: {
    height: 250,
    width: 150,
    backgroundColor: grey,
    borderRadius: 20,
    justifyContent: 'space-between'
  },
  img: {
    alignSelf: 'center',
    height: 140,
    width: 140,
    top: -50
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
    marginHorizontal: 5,
    height: 50,
    top: -40
  },
  title2: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginHorizontal: 5,
    height: 50,
    top: -40
  },
  butBox: {
    height: 50,
    width: 50,
    backgroundColor: 'grey',
    opacity: 0.5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    top: -350,
    left: 90,
  },
});

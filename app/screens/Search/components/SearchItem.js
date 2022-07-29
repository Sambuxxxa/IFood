import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {grey} from "../../../data/COLORS";
import MainButton from "../../../coreComponents/MainButton";
import {MainContext} from "../../../../App";

export default function SearchItem({item}) {

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
    marginBottom: 10,
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
  }

});

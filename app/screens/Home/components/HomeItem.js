import React from 'react';
import {
  FlatList, Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, TextInput,
  useColorScheme,
  View,
} from 'react-native';

import Ionicons from "react-native-vector-icons/Ionicons";
import {blue, grey} from "../../../data/COLORS";
import MainButton from "../../../components/MainButton";

export default function HomeItem({item})  {

  return (
    <View style={styles.container}>
      <View style={styles.mainBox}>
        <Image source={item.img} style={styles.img}/>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.title2}>₴{item.price}</Text>

        <View style={{top: -40}}><MainButton/></View>

      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    height: 300,
    width: 150,
    marginHorizontal: 5,
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

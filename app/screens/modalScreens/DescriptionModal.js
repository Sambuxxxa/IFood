import React, {useContext} from 'react';
import {Image, ImageBackground, Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {MainContext} from "../../../App";
import {blue, grey, nightBlue} from "../../data/COLORS";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function DescriptionModal({isVisibleDM}) {
  const data = useContext(MainContext)
  const item = data.selectedItem

  return (
    <Modal
      onRequestClose={() => data.setIsVisibleDM(prevState => !prevState)}
      animationType={"slide"}
      visible={isVisibleDM}
      style={styles.container}
    >
      <ImageBackground source={require('../../assets/images/background.png')} style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={[styles.butBox, {marginRight: 80, marginTop: 20}]}
                              onPress={() => {
                                data.setIsVisibleDM(prevState => !prevState)
                              }}>
              <Entypo name="chevron-thin-left" size={24} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (data.likedList.includes(item)) {
                  data.deleteFromLikedList(item)
                } else {
                  data.addToLikedList(item)
                }
              }}
              style={[styles.butBox, {marginLeft: 80, marginTop: 20}]}>
              <View style={{opacity: 10}}>
                <Foundation name="heart" size={24} color={data.likedList.includes(item) ? 'red' : 'white'}/>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.mainBox}>

            <Image source={item.img2} style={styles.img}/>

            <View style={styles.descBox}>
              <View style={styles.nPBox}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.desc}>{item.type}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 20, fontWeight: '800', color: blue, top: 15}}>₴</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              </View>
              <View style={{marginHorizontal: 30, marginTop: 5}}>
                <Text style={styles.desc}>
                  {item.desc}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.butContainer}>
                <MaterialIcons name="add-shopping-cart" size={24} color={grey}/>
                <Text style={styles.butText}>Добавить</Text>
              </TouchableOpacity>
            </View>
          </View>
      </ImageBackground>
      <StatusBar backgroundColor={"#2E3542"}/>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E3542",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    height: 200,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  mainBox: {
    alignItems: "center",
    backgroundColor: nightBlue,
    height: '100%',
    width: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  butBox: {
    height: 50,
    width: 50,
    backgroundColor: nightBlue,
    opacity: 0.5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 311,
    height: 500,
    alignSelf: 'center',
    top: -150
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  descBox: {
    height: '100%',
    width: '100%',
    top: -150
  },
  nPBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    color: '#fff',
  },
  price: {
    fontSize: 35,
    fontWeight: '800',
    color: '#fff',
  },
  desc: {
    fontSize: 17,
    fontWeight: "200",
    color: '#fff',
  },
  butContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 60,
    width: 200,
    borderRadius: 20,
  },
  butText: {
    fontSize: 25,
    fontWeight: "500",
    color: grey,
  }
});

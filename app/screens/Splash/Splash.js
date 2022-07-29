import {ActivityIndicator, Image, StyleSheet, View} from 'react-native'
import React from 'react'
import {nightBlue} from "../../data/COLORS";

export default function Splash() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo/Logo3.png')} style={styles.img}/>
      <ActivityIndicator color={'#fff'} size={'large'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: nightBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 250,
    height: 250,
  }
})

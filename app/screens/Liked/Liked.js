import React, {useContext} from 'react';
import {FlatList, Image, StyleSheet, Text, View,} from 'react-native';
import {nightBlue} from "../../data/COLORS";
import {MainContext} from "../../../App";
import LikedItem from "./components/LikedItem";

export default function Liked() {
  const data = useContext(MainContext)

  if (data.likedList.length === 0) {
    return (
      <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
        <Image source={require('../../assets/images/heart.png')} style={styles.img} />
        <Text style={[styles.title, {fontSize: 15}]}>Список предпочтений пустой</Text>
        <Text style={[styles.title, {fontSize: 15}]}>Нажмите на сердечко</Text>
        <Text style={[styles.title, {fontSize: 15}]}>что бы добавить элемент</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Список предпочтений:</Text>
        <FlatList
          data={data.likedList}
          renderItem={({item}) => (<LikedItem item={item}/>)}
          numColumns={'2'}
          style={{backgroundColor: nightBlue}}
          columnWrapperStyle={{justifyContent: 'space-evenly'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: nightBlue,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '300',
    marginLeft: 10,
    marginTop: 10,
  },
  img: {
    height: 120,
    width: 120,
  }
});

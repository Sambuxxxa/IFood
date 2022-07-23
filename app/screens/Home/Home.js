import React, {useContext} from 'react';
import {FlatList, ScrollView, StatusBar, StyleSheet, Text,} from 'react-native';
import {nightBlue} from "../../data/COLORS";
import {PRODUCTS} from "../../data/PRODUCTS";
import HomeItem from "./components/HomeItem";
import {MainContext} from "../../../App";

export default function Home() {
  const data = useContext(MainContext)

  const burgersData = PRODUCTS.filter(item => {
    if (item.type === 'Burger') {
      return (item)
    }
  });
  const pizzasData = PRODUCTS.filter(item => {
    if (item.type === 'Pizza') {
      return (item)
    }
  });
  const rollsData = PRODUCTS.filter(item => {
    if (item.type === 'Roll') {
      return (item)
    }
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Бургеры:</Text>
      <FlatList
        data={burgersData}
        renderItem={({item}) => (<HomeItem item={item}/>)}
        horizontal={true}
        style={{marginTop: 10, marginHorizontal: 10}}
      />
      <Text style={styles.title}>Пиццы:</Text>
      <FlatList
        data={pizzasData}
        renderItem={({item}) => (<HomeItem item={item}/>)}
        horizontal={true}
        style={{marginTop: 10, marginHorizontal: 10}}
      />
      <Text style={styles.title}>Роллы:</Text>
      <FlatList
        data={rollsData}
        renderItem={({item}) => (<HomeItem item={item}/>)}
        horizontal={true}
        style={{marginVertical: 10, marginHorizontal: 10}}
      />
      <StatusBar backgroundColor={nightBlue}/>
    </ScrollView>
  );
};

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

});

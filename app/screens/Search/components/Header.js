import React, {useContext} from 'react';
import {StatusBar, StyleSheet, TextInput, View,} from 'react-native';

import Ionicons from "react-native-vector-icons/Ionicons";
import {grey, nightBlue} from "../../../data/COLORS";
import {PRODUCTS} from "../../../data/PRODUCTS";
import {SearchContext} from "../Search";

export default function Header() {

  const data = useContext(SearchContext)
  function search(text) {
    if (text === '') {
      data.setSearchedList(PRODUCTS)
    }
    data.setSearchedList(PRODUCTS.filter(item => {
      return(item.title.toLowerCase().includes(text))
    }))
  }

  return (
    <View style={styles.container}>
      <View style={styles.inpBox}>
        <Ionicons name="search-outline" size={30} color="white"/>
        <TextInput
          placeholder={'Искать...'}
          placeholderTextColor={'grey'}
          style={styles.inp}
          caretHidden={true}
          onChangeText={(text) => {
            search(text.toLowerCase())
          }}

        />
      </View>
      <StatusBar backgroundColor={nightBlue}/>
    </View>
  );
};

const styles = StyleSheet.create({
  inpBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 55,
    backgroundColor: grey,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 5
  },
  inp: {
    color: '#fff',
    height: 55,
    maxWidth: '85%',
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
  }

});

import React, {useState} from 'react';
import {FlatList, StyleSheet, View,} from 'react-native';
import Header from "./components/Header";
import {PRODUCTS} from "../../data/PRODUCTS";
import {nightBlue} from "../../data/COLORS";
import SearchItem from "./components/SearchItem";

export const SearchContext = React.createContext();

export default function Search() {
  const [searchedList, setSearchedList] = useState(PRODUCTS);

  const data = {
    searchedList,
    setSearchedList
  }

  return (
    <SearchContext.Provider value={data}>
      <View style={styles.container}>
        <Header/>
        <FlatList
          data={searchedList}
          renderItem={({item}) => (<SearchItem item={item}/>)}
          numColumns={"2"}
          columnWrapperStyle={{justifyContent: 'space-evenly'}}/>
      </View>
    </SearchContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: nightBlue,
  },
});

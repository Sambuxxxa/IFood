import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, TextInput,
  useColorScheme,
  View,
} from 'react-native';

import Ionicons from "react-native-vector-icons/Ionicons";
import {grey, nightBlue} from "../../../data/COLORS";

export default function Header()  {

  return (
    <View style={styles.container}>
      <View style={styles.inpBox}>
        <Ionicons name="search-outline" size={30} color="white" />
        <TextInput
          placeholder={'Искать...'}
          placeholderTextColor={'grey'}
          style={styles.inp}
          caretHidden={true}
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
    marginTop: 5
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

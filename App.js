import React from 'react';
import {StyleSheet, View,} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "./app/screens/Home/Home";
import NewOrder from "./app/screens/NewOrder/NewOrder";
import Cart from "./app/screens/Cart/Cart";
import {NavigationContainer} from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import {grey, nightBlue} from "./app/data/COLORS";
import {BoxShadow} from "react-native-shadow"
import {shadowOpt} from "./app/data/shadowOpt";

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#fff',
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {backgroundColor: nightBlue, borderWidth: 0,}
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarLabel: ' ',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home-outline" size={26} color={color}/>
            ),
          }}
        />
        <Tab.Screen
          name="NewOrder"
          component={NewOrder}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              // <BoxShadow setting={shadowOpt}>
                <View style={styles.plus}>
                  <AntDesign name="plus" size={45} color={grey}/>
                </View>
              // </BoxShadow>
            )
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: ' ',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="cart-outline" size={28} color={color}/>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  plus: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    top: -10,
  }
});

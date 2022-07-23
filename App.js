import React, {useState} from 'react';
import {StyleSheet,} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "./app/screens/Home/Home";
import Cart from "./app/screens/Cart/Cart";
import {NavigationContainer} from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {grey, nightBlue} from "./app/data/COLORS";
import DescriptionModal from "./app/screens/modalScreens/DescriptionModal";
import {PRODUCTS} from "./app/data/PRODUCTS";
import Search from "./app/screens/Search/Search";
import Liked from "./app/screens/Liked/Liked";
import Foundation from "react-native-vector-icons/Foundation";

const Tab = createBottomTabNavigator();

export const MainContext = React.createContext();

export default function App() {

  const [selectedItem, setSelectedItem] = useState(PRODUCTS[0]);
  const [isVisibleDM, setIsVisibleDM] = useState(false);

  const [cartList, setCartList] = useState([])
  const [likedList, setLikedList] = useState([]);

  const addToCartList = (box) => {
    setCartList([
        ...cartList,
        box
      ]
    )
  }
  const deleteFromCartList = (box) => {
    setCartList((prevState) =>
      prevState.filter((item) => {
        if (item.id === box.id) {
          return null;
        } else {
          return item;
        }
      })
    )
  }
  const addToLikedList = (item) => {
    setLikedList((prevState) => [
      ...likedList,
      item
    ])
  }
  const deleteFromLikedList = (box) => {
    setLikedList((prevState) =>
      prevState.filter((item) => {
        if (item.id === box.id) {
          return null;
        } else {
          return item;
        }
      })
    )
  }

  const MainData = {
    selectedItem,
    setSelectedItem,
    setIsVisibleDM,
    addToCartList,
    cartList,
    setCartList,
    deleteFromCartList,
    likedList,
    setLikedList,
    addToLikedList,
    deleteFromLikedList,
  }

  return (
    <MainContext.Provider value={MainData}>
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
            name="Liked"
            component={Liked}
            options={{
              tabBarLabel: ' ',
              tabBarIcon: ({color, size}) => (
                <Foundation name="heart" size={24} color={color}/>
              )
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({color, size}) => (
                <Ionicons name="search-outline" size={size} color={color}/>
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
      <DescriptionModal isVisibleDM={isVisibleDM}/>
    </MainContext.Provider>

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

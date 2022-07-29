import {StyleSheet, View} from 'react-native'
import React, {useContext, useState} from 'react'
import NewAccount from "./NewAccount/NewAccount";
import LogIn from "./LogIn/LogIn";
import {AuthContext} from "../../../App";

const Profile = () => {
  const data = useContext(AuthContext)

  const [logIn, setLogIn] = useState(true);
  return data.isLogined ? (
    <View>
    </View>
  ) : logIn ? (<LogIn setLogIn={setLogIn}/>) : (<NewAccount setLogIn={setLogIn}/>)
}

export default Profile

const styles = StyleSheet.create({})

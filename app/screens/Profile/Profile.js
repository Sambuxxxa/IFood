import {View} from 'react-native'
import React, {useContext, useState} from 'react'
import NewAccount from "./NewAccount/NewAccount";
import LogIn from "./LogIn/LogIn";
import {AuthContext} from "../../../App";

const Profile = () => {
  const {isLogined} = useContext(AuthContext)
  const [logIn, setLogIn] = useState(true);

  return isLogined ? (
    <View>
    </View>
  ) : logIn ? (<LogIn setLogIn={setLogIn}/>) : (<NewAccount setLogIn={setLogIn}/>)
}
export default Profile


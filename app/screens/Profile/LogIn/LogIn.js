import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import React, {useContext, useState} from 'react'
import {blue, grey, nightBlue} from "../../../data/COLORS";
import {AuthContext} from "../../../../App";
import auth from "@react-native-firebase/auth";

const LogIn = ({setLogIn}) => {
  const data = useContext(AuthContext)
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const Login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in!');
        // const uid = auth().currentUser.uid
        data.setIsLogined(true)
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back!</Text>
      <View style={styles.inpBox}>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder={'Email'}
          placeholderTextColor={'#fff'}
          caretHidden={true}
          keyboardType={'email-address'}
          style={styles.inp}/>
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder={'Password'}
          placeholderTextColor={'#fff'}
          caretHidden={true}
          secureTextEntry={true}
          style={[styles.inp, {borderTopWidth: 0.5, borderTopColor: '#fff'}]}/>
      </View>
      <TouchableOpacity
        onPress={() => Login()}
        style={styles.butBox}>
        <Text style={styles.butText}>Войти</Text>
      </TouchableOpacity>
      <View style={styles.bottomTextBox}>
        <Text style={{color: '#fff'}}>Ещё нету аккаунта? </Text>
        <TouchableOpacity
          onPress={() => setLogIn(prevState => !prevState)}>
          <Text style={{color: blue}}>Создать аккаунт</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LogIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: nightBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginHorizontal: "5%",
    alignSelf: 'flex-start',
    fontSize: 70,
    fontWeight: '800',
    color: grey,
  },
  inpBox: {
    marginHorizontal: '5%',
    paddingHorizontal: 10,
    height: 140,
    width: '90%',
    backgroundColor: grey,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: '#fff'
  },
  inp: {
    height: 70,
    color: '#fff',
    fontSize: 15
  },
  butBox: {
    height: 50,
    width: '70%',
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  butText: {
    color: '#000',
    fontSize: 17
  },
  bottomTextBox: {
    flexDirection: "row",
    marginTop: 10,
  },
})

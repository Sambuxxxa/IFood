import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import React, {useContext, useState} from 'react'
import {blue, grey, nightBlue} from "../../../data/COLORS";
import {AuthContext} from "../../../../App";
import auth from '@react-native-firebase/auth';

const NewAccount = ({setLogIn}) => {
  const data = useContext(AuthContext)
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [err, setErr] = useState('');

  function validate(email) {
    let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(email)
  }

  const createAccount = () => {
    if (email === '') {
      setErr('Введите email');
    } else if (validate(email) === false) {
      setErr('Введите корректный email');
    } else if (password === '') {
      setErr('Введите пароль');
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async () => {
          console.log('User account created & signed in!');
          // const uid = auth().currentUser.uid
          data.setIsLogined(true)
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            setErr('That email address is already in use!');
          }
          if (error.code === 'auth/invalid-email') {
            setErr('That email address is invalid!');
          }
        });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create account</Text>

      <View style={styles.inpBox}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder={'Email'}
          placeholderTextColor={'#fff'}
          keyboardType={'email-address'}
          style={styles.inp}/>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder={'Password'}
          placeholderTextColor={'#fff'}
          secureTextEntry={true}
          style={[styles.inp, {borderTopWidth: 0.5, borderTopColor: '#fff'}]}/>
      </View>
      <Text style={styles.error}>{err}</Text>
      <TouchableOpacity
        onPress={() => createAccount()}
        style={styles.butBox}>
        <Text style={styles.butText}>Создать аккаунт</Text>
      </TouchableOpacity>
      <View style={styles.bottomTextBox}>
        <Text style={{color: '#fff'}}>Уже есть аккаун? </Text>
        <TouchableOpacity
          onPress={() => setLogIn(prevState => !prevState)}>
          <Text style={{color: blue}}>Войти</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default NewAccount

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
  error: {
    color: blue
  }
})

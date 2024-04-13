import React, { useRef, useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import styles from '../styles/style'
import Toast from 'react-native-toast-message'


const Cadastro = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [fone, setFone] = useState('')
  const [password, setPassword] = useState('')

  const userNameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const passwordRef = useRef(null)

  const handleRegisterClick = () => {
    if(userName === ''){
      userNameRef.current.focus()
      throw 'Username not informed'
    }
    if(email === ''){
      emailRef.current.focus()
      throw 'Email not informed'
    }
    if(fone === ''){
      phoneRef.current.focus()
      throw 'Phone number not informed'
    }
    if(password === ''){
      passwordRef.current.focus()
      throw 'Password not informed'
    }
    Toast.show({
      type:'success',
      text1:'Success',
      text2:'User registered successfully'
    })
  }


  return (
    <View style={styles.container}>
      <Text style={styles.labelTitle}>User Registration</Text>
      <View style={[styles.inputCombo, { marginTop: 50 }]}>
        <Text>Username</Text>
        <TextInput style={styles.inputbox} placeholder='Dude´s name' defaultValue={userName} onChangeText={e => setUserName(e)} ref={userNameRef}/>
      </View>
      <View style={[styles.inputCombo, { marginTop: 50 }]}>
        <Text>Email</Text>
        <TextInput style={styles.inputbox} placeholder='something@email.com' 
        defaultValue={email} onChangeText={e => setEmail(e)} ref={emailRef}/>
      </View>
      <View style={[styles.inputCombo, { marginTop: 50 }]}>
        <Text>Phone</Text>
        <TextInput style={styles.inputbox} placeholder='(00) 90000-0000' defaultValue={fone} onChangeText={e => setFone(e)} ref={phoneRef}/>
      </View>
      <View style={[styles.inputCombo, { marginTop: 50 }]}>
        <Text>Password</Text>
        <TextInput style={styles.inputbox} placeholder='shhhh' secureTextEntry={true} defaultValue={password} onChangeText={e => setPassword(e)} ref={passwordRef}/> 
      </View>
      <View style={styles.inputButton}>
        <Pressable style={[styles.btnStandard, styles.btnSuccess]} onPress={() => {
          try {
            handleRegisterClick()
          }
          catch (err) {
            Toast.show({
              type: 'error',
              text1: 'Atenção',
              text2: err
            })
          }
        }}><Text style={styles.btnText}>Salvar</Text></Pressable>
      </View>
    </View>
  )
}

export default Cadastro



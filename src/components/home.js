import React from 'react'
import { Pressable, View, Text } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import styles from '../styles/style'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Pressable style={styles.btnStandard} onPress={()=>navigation.navigate('cadastro')}>
          <Text style={[styles.btnText, {color:'#000'}]}>Cadastro</Text>
        </Pressable>
        <Pressable style={styles.btnStandard} onPress={()=>navigation.navigate('nomecompleto')}>
          <Text style={[styles.btnText, {color:'#000'}]}>Nome completo</Text>
        </Pressable>
    </View>
  )
}

export default Home
import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import Toast from 'react-native-toast-message'
import styles from '../styles/style';

const NameType = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [nomeCompleto, setNomeCompleto] = useState('')
    const firstNameRef = useRef()
    const lastNameRef = useRef()

    const handleResultClick = () => {
        setNomeCompleto('')
        if (firstName === '') {
            firstNameRef.current.focus()
            throw 'Nome não informado'
        }
        if (lastName === '') {
            lastNameRef.current.focus()
            throw 'Sobrenome não informado'
        }
        setNomeCompleto(`${firstName} ${lastName}`)
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputArea}>
                <View style={styles.inputCombo}>
                    <Text>Insert your first name</Text>
                    <TextInput placeholder='Insert your name' id='firstName' onChangeText={(e) => { setFirstName(e) }} style={styles.inputbox}
                        defaultValue={firstName} ref={firstNameRef} />
                </View>
                <View style={styles.inputCombo}>
                    <Text>Insert your last name</Text>
                    <TextInput style={styles.inputbox} placeholder='Insert your last name' id='firstName' onChangeText={(e) => setLastName(e)}
                        defaultValue={lastName} ref={lastNameRef} />
                </View>
                <View style={styles.inputButton}>
                    <Pressable style={[styles.btnStandard, styles.btnSuccess]} onPress={() => {
                        try {
                            handleResultClick()
                        }
                        catch (err) {
                            Toast.show({
                                type:'error',
                                text1:'Atenção',
                                text2:err
                            })
                        }
                    }}>
                        <Text style={styles.btnText}>Click me</Text>
                    </Pressable>
                </View>
                <View style={styles.inputResult}>
                    <Text style={styles.textResult}> Nome Completo: {nomeCompleto} </Text>
                </View>
            </View>
        </View>

    )
}




export default NameType
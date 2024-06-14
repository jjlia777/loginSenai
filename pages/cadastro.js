import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
  } from 'react-native';
  import React from 'react';
  import * as Animatable from 'react-native-animatable';
  import { useNavigation } from '@react-navigation/native';
  import { useState } from "react";
  import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const cadastroFunction = async () => {
      try {
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('password', password);
        navigation.navigate('entrada')
        // Aqui você pode adicionar qualquer outra lógica, como navegar para outra tela
      } catch (error) {
        console.error('Error signing up:', error);
      }
    };


    const navigation = useNavigation();

    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('index')}>
              <Image style={styles.seta} source={require('./../assets/seta.png')} />
            </TouchableOpacity>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
              <Text style={styles.message}>Faça seu cadastro</Text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
              <Text style={styles.title}>
                Digite seu e-mail:
              </Text>
              <TextInput
                placeholder='Digite um email...'
                style={styles.input}
                onChangeText={setUsername}
              />
              <Text style={styles.title}>
                Digite sua senha:
              </Text>
              <TextInput
                placeholder='Insira uma senha'
                style={styles.input}
                onChangeText={setPassword}
              />
              <TextInput
                placeholder='Confirme sua senha'
                style={styles.input}
              />
              <TouchableOpacity
                onPress={cadastroFunction}
                style={styles.button}>
                <Text style={styles.buttonText}>
                    Cadastrar
                </Text>
            </TouchableOpacity>
            </Animatable.View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#880000'
    },
    seta: {
      marginHorizontal: 20,
      marginTop: 30,
      width: 17,
      height: 17,
    },
    containerHeader: {
      marginTop: '14%',
      marginBottom: '8%',
      paddingStart: '5%',
    },
    message: {
      fontSize: 28,
      fontWeight: 'bold',
      color: "#FFF"
    },
    containerForm: {
      backgroundColor: "#FFF",
      flex: 1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: "5%",
      paddingEnd: "5%"
    },
    title: {
      fontSize: 20,
      marginTop: 28,
    },
    input: {
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16
    },
    button: {
      backgroundColor: '#880000',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: "#FFF",
      fontSize: 18,
      fontWeight: 'bold'
    },
    buttonRegister: {
      marginTop: 14,
      alignSelf: 'center'
    },
    registerText: {
      color: '#a1a1a1'
    }
  })
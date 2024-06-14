import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as Animatable from 'react-native-animatable';


export default function Login() {

    useFonts({ 'Oswald': require('../assets/fonts/Oswald-VariableFont_wght.ttf') });
    const navigation = useNavigation();

    const [fontsLoaded, fontError] = useFonts({
        'Oswald': require('../assets/fonts/Oswald-VariableFont_wght.ttf'),
      });

      if (!fontsLoaded && !fontError) {
        return null;
      }

    return (
        <View style={styles.container} >
            <View style={styles.containerLogo}>
            <Text style={styles.title}>
                    Login realizado com sucesso!
                </Text>
                <Text style={styles.title}>
                    Seja bem vindo(a)
                </Text>
            </View>
            <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
            <TouchableOpacity
                onPress={() => navigation.navigate('index')}
                style={styles.button}>
                <Text style={styles.buttonText}>
                    Ok!
                </Text>
            </TouchableOpacity>
        </Animatable.View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#880000'
    },
    containerLogo: {
        flex: 3,
        backgroundColor: '#880000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '15%',
        paddingEnd: '15%'
    },
    title: {
        fontSize: 22,
        marginTop: 20,
        marginBottom: 12,
        color: "#fff",
        fontFamily: 'Oswald',
    },
    text: {
        color: '#a1a1a1'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#880000',
        borderRadius: 50,
        paddingVertical: 8,
        width: '70%',
        alignSelf: 'center',
        bottom: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})
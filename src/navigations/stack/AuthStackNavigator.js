import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthHomeScreen from '../../screens/auth/AuthHomeScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import SignupScreen from '../../screens/auth/SignupScreen';

const Stack = createStackNavigator()
const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle:{
          backgroundColor:'white'
        },
        headerStyle:{
          backgroundColor:'white',
          shadowColor:'gray'
        },
        headerTitle:{
          fontSize:15
        },
        headerTintColor:'black'
      }}
    >
        <Stack.Screen name='AuthHome' component={AuthHomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={LoginScreen} options={{headerTitle:'로그인'}}/>
        <Stack.Screen name='Signup' component={SignupScreen} options={{headerTitle:'회원가입'}}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({});

export default AuthStackNavigator;
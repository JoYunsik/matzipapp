import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import useForm from '../../hooks/useForm';
import { validateLogin } from '../../utils';



const LoginScreen = () => {

  const login = useForm({
    initialValue:{email: '',password: ''},
    validate: validateLogin
  })

  const handleSubmit = () =>{
    console.log('values', login.values)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
          <InputField 
            placeholder="이메일" 
            error={login.errors.email} 
            touched={login.touched.email}
            inputMode='email' 
            // value={values.email}
            // onChangeText={(text)=>handleChangeText('email',text)}
            // onBlur={()=>handleBlur('email')}
            {...login.getTextInputProps('email')}
          />
          <InputField 
            placeholder="비밀번호" 
            touched={login.touched.password}
            error={login.errors.password}
            secureTextEntry
            // value={values.password}
            // onChangeText={(text)=>handleChangeText('password',text)}
            // onBlur={()=>handleBlur('password')}
            {...login.getTextInputProps('password')}
          />
      </View>
      <CustomButton
        label='로그인'
        variant='filled'
        size='large'
        onPress={handleSubmit}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:30,
  },
  inputContainer:{
    gap: 20
  },
});

export default LoginScreen;
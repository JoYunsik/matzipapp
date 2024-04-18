import React from 'react';
import {Button, Dimensions, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import CustomButton from '../../components/CustomButton';

const AuthHomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image resizeMode='contain' style={styles.image} source={require('../../assets/matzip.png')}/>
      </View>
      <View style={styles.buttonContainer}>
          <CustomButton 
            label='로그인 화면으로 이동'
            onPress={()=>navigation.navigate('Login')}
          />
          <CustomButton 
            label='회원가입으로 이동' 
            variant='outlined'
            onPress={()=>navigation.navigate('Signup')}
          />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 30,
    alignItems:'center'
  },
  imageContainer:{
    flex:1.5,
    width: Dimensions.get('screen').width / 2
  },
  image:{
    width:'100%',
    height:'100%'
  },
  buttonContainer:{
    flex:1,
    gap:10
  }
});

export default AuthHomeScreen;
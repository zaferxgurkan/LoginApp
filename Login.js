/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,Keyboard} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login Page',
      };
  constructor(props){
    super(props)
    this.state={
      userEmail:'',
      userPassword : '',
      sesion : null
    }
  }

  Login = ()=>{
    const {userEmail,userPassword}=this.state;
    const {navigate} = this.props.navigation;
    fetch('http://zafergurkan.site/reactApp/login.php',{//fetch methodu -- json dönüşümleri
      method : 'post',
      headers:{
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
      },
      body:JSON.stringify({
        email : userEmail,
        password : userPassword
      })


    })
    .then((response)=>response.json())
    .then((responseJson)=>{
      if (responseJson == 'ok') {
        alert("Başarılı Giriş Yapıldı.");
        //this.props.navigation.push('Login');
        //giriş yapıldıktan sonra navigate ile istenilen sayfaya yönlendirme.
        this.props.navigation.navigate('Profile',{
            userEmail : userEmail,
            session : true
        });
      } else {
        alert(responseJson)
      }
    })
    .catch((error)=>{
      console.error(error);
    })


    Keyboard.dismiss();//inputların işi bittikten sonra klavyeyi kapatmaya yarar.
  }



  render() {
    const {navigation} = this.props;
    const sessionLogout = navigation.getParam('sesion','Giriş');//sayfalar arası veri almaya yarar.
    let metin = sessionLogout;
    //if (sessionLogout==="ok") metin = "Çıkış Yaptınız!";
    //else metin = "Giriş Yapınız!" 
    return (
      <View style={styles.container}>
        <Text>{metin}</Text>
          <TextInput
          placeholder="E-Posta Adresiniz :"
          style={{width:200,margin:10}} 
          onChangeText={userEmail=>this.setState({userEmail})}/>

          <TextInput secureTextEntry = {true}
          placeholder="Şifreniz :"
          style={{width:200,margin:10}}
          onChangeText={userPassword =>this.setState({userPassword})} />

          <TouchableOpacity 
          onPress={this.Login}
          style={{width:200, padding : 10,backgroundColor : 'whitesmoke',alignItems:"center"}}>
            <Text style={{color:'black'}}>Giriş Yap</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

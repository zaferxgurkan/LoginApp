import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View,Button,TextInput,TouchableOpacity,Keyboard} from 'react-native';

  
  class ProfileScreen extends React.Component {
    static navigationOptions = {//uygulamanın başlık kısmını oluşturur.
        title: 'Profile Page',
      };
      render() {
          const {navigation} = this.props;
          const userEmail = navigation.getParam('userEmail','mailadresi');
          
        return (
          <View> 
          <Text style={{width :200,margin:10}}>Profil Sayfasına Hoşgeldin</Text>
          <Text style={{width :250,margin:10}}>E-posta Adresi : {JSON.stringify(userEmail)} </Text>
          <Button style={{width :200,margin:10}} title="Çıkış Yap"
          onPress={()=>{
            alert("Güle güle : "+userEmail);  
            this.props.navigation.navigate("Login",{
            sessionLogout : 'Çıkış Yaptınız!'
            //itemID : 23 ||bu tarz veriler ile objenin içi doldurulabilir. 
          })
          
          }}/>
          </View>
        );
      }
}
export default ProfileScreen;
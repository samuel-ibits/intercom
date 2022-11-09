import React from "react";
import { View, Text, ToastAndroid,StyleSheet } from "react-native";
import LoginScreen, { SocialButton } from "react-native-login-screen";
import storeData from "../../componets/asyncstoragestore";


export default function main() {
          

  return (
    <LoginScreen
      logoImageSource={require("../../assets/logo-example.png")}
      onLoginPress={() => {
        ToastAndroid.showWithGravityAndOffset(
          "Login Pressed",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50
        );
      }}
      emailPlaceholder="Username"
      disableSignup={false}
      loginButtonStyle={styles.buttonStyle}
      disableSocialButtons={true}
    >
    </LoginScreen>
  );
}


const styles = StyleSheet.create({
socialBtn:{
  marginTop: 16,
},
buttonStyle:{
  backgroundColor:'#1A1A1A'
}
});

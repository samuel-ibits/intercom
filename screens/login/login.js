import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ToastAndroid,
  ScrollView,
  Linking,
  Platform,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Dailpad from "../../componets/dailpad";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 163, height: 30 }}
        source={require("../../assets/logo-example.png")}
      />
      <View style={styles.inputHolder}>
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Email/Phone number</Text>
          <TextInput style={styles.inputText} />
        </View>
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.inputText} />
        </View>

        <TouchableOpacity style={styles.bigBtn} activeOpacity={0.7} onPress={() => navigation.navigate("home")}>
          <Text style={styles.btnLabel}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.leftM}>
          Don't have an account?
        </Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.smaBtn} onPress={() => navigation.navigate("register")}>
            <Text  style={styles.btnLabel2}>Sign up</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  leftM:{
    marginRight:10
  }
  ,
bottom:{
  justifyContent: "center",
  alignItems: "center",
  flexDirection:'row',
}
  ,
  btnLabel: {
    color: "#fff",
    fontSize: 21,
  }, 
  btnLabel2: {
    color: "#fff",
    fontSize: 14,
  },
  smaBtn: {
    backgroundColor: "#1A1A1A",
    height: 41,
    width: 90,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  bigBtn: {
    backgroundColor: "#1A1A1A",
    height: 62,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    backgroundColor: "#eee",
    padding: 10,
    fontSize: 20,
    width: windowWidth - 30,
    height: 61,
    borderRadius: 10,
    paddingHorizontal: 30,
  },
  inputHolder: {
    marginVertical: 90,
  },
  inputLabel: {
    color: "#666",
    fontSize: 14,
    marginBottom: 10,
    marginLeft: 20,
  },
  inputSection: {
    marginVertical: 15,
  },
});

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  ToastAndroid,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CallScreen from "../screens/callScreen/callScreen";
import Feather from "@expo/vector-icons/Feather";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function Main() {
  const [showDail, setShowDail] = useState(true);
  const [showDailpad, setShowDailpad] = useState(true);
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#000000"
        barStyle={"light-content"}
        hidden={false}
      />
      {showDail ? null : <CallScreen />}

      {showDailpad ?   <View style={styles.keypad}>
          <View style={styles.keypadInner}>
            <View style={styles.numberInputHolder}>
              <TextInput
                style={styles.numberInput}
                showSoftInputOnFocus={false}
              />

              <TouchableOpacity style={styles.cancleIcon}    onPress={()=>setShowDailpad(!showDailpad)}>
                <Feather name="x" size={20} color="#1A1A1A" />
              </TouchableOpacity>
            </View>
            <View style={styles.keyHolder}>
              <View style={styles.rowone}>
                <TouchableOpacity
                  style={styles.key}
                  
                  onPress={() => {
                    ToastAndroid.showWithGravityAndOffset(
                      "keypad click",
                      ToastAndroid.LONG,
                      ToastAndroid.BOTTOM,
                      25,
                      50
                    );
                  }}
                >
                  <Text style={styles.number}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.key} >
                  <Text style={styles.number}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.key} >
                  <Text style={styles.number}>3</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.rowone}>
                <TouchableOpacity style={styles.key} >
                  <Text style={styles.number}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.key} >
                  <Text style={styles.number}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.key} >
                  <Text style={styles.number}>6</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.rowone}>
                <TouchableOpacity style={styles.key} >
                  <Text style={styles.number}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.key} >
                  <Text style={styles.number}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.key} >
                  <Text style={styles.number}>9</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.rowone}>
                <TouchableOpacity style={styles.key2} >
                  <Text style={styles.number}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.key3}
                  
                  onPress={() => setShowDail(!showDail)}
                >
                  <Image
                    style={{ width: 39, height: 39 }}
                    source={require("../assets/phone-call.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View> : (
      null
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00000029",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 72,
    zIndex: 99999999,
  },
  rowone: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  keyHolder: {
    width: windowWidth - 30,
    padding: 10,
    justifyContent: "space-between",
    height: windowHeight / 2.4,
  },
  key: {
    backgroundColor: "#1A1A1A",
    width: windowWidth / 3.7,
    height: windowHeight / 11,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  key2: {
    backgroundColor: "#1A1A1A",
    width: windowWidth / 2.4,
    height: windowHeight / 11,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  key3: {
    backgroundColor: "#00981E",
    width: windowWidth / 2.4,
    height: windowHeight / 11,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  number: {
    color: "#fff",
    fontSize: 32,
  },
  keypad: {
    width: windowWidth,
    height: windowHeight / 2,
    backgroundColor: "#eee",
    alignItems: "center",
  },
  numberInput: {
    borderBottomWidth: 1,
    width: windowWidth - 30,
    borderColor: "#00000029",
    padding: 10,
    textAlign: "center",
    fontSize: 23,
  },
  numberInputHolder: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cancleIcon: {
    position: "absolute",
    right: 2,
    zIndex: 99,
  },
});

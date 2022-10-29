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

export default function CallScreen() {
  const [showCall, setShowCall] = useState(true);
  return (
  
     <View  style={styles.comholder}>
       {showCall ?
       <View style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.dpHolderSection}>
            <View style={styles.dpHolder}>
              <Image
                style={styles.dp}
                source={require("../../assets/profileW.png")}
              />
            </View>
            <Text style={styles.name}>Ibitoye Great</Text>
          </View>

          <View>
            <View style={styles.keyHolder}>
              <View style={styles.row}>
                <TouchableOpacity style={styles.key}>
                  <Image
                    style={styles.keyIcon}
                    source={require("../../assets/keypad.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.key}>
                  <Image
                    style={styles.keyIconPause}
                    source={require("../../assets/pause.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.key}>
                  <Image
                    style={styles.keyIconaddCo}
                    source={require("../../assets/person-add.png")}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.row}>
                <TouchableOpacity style={styles.key}>
                  <Image
                    style={styles.keyIconnoSound}
                    source={require("../../assets/no-sound.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.keyRed}  onPress={()=>setShowCall(!showCall)}>
                  <Image
                    style={styles.keyRedIcon}
                    source={require("../../assets/call-end.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.key}>
                  <Image
                    style={styles.keyIconSound}
                    source={require("../../assets/sound.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Image
            style={styles.logo}
            source={require("../../assets/logo-example.png")}
          />
        </View>
      </View> : null}
     </View>
    
  );
}

const styles = StyleSheet.create({
  comholder:{
    left:0,
    position:'absolute',
    top: -windowHeight / 100, 
    flex: 1,
  }
  ,
  container: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 999999,
    top: -windowHeight / 2.5,
    left: 0,
  }, 
   container2: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "#FFFFFF",
    zIndex: 999999,
    left: 0,
  },
  keyHolder: {
    width: windowWidth - 30,
    height: windowHeight / 3,
    justifyContent: "space-around",
  },
  row: {
    width: windowWidth - 30,
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: windowHeight / 3.5,
  },
  dp: {
    width: "80%",
    height: "100%",
  },
  dpHolder: {
    width: 106,
    height: 106,
    borderRadius: 106 / 2,
    backgroundColor: "#ccc",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 30,
  },
  dpHolderSection: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -100,
  },
  name: {
    fontSize: 30,
    color: "#1A1A1A",
    marginTop: 20,
  },
  keyIcon: {
    width: 23,
    height: 22,
  },
  keyIconPause: {
    width: 17,
    height: 21,
  },
  keyIconaddCo: {
    width: 26,
    height: 21,
  },
  keyRedIcon: {
    width: 43,
    height: 16,
  },
  keyIconSound: {
    width: 23,
    height: 19,
  },
  keyIconnoSound: {
    width: 29,
    height: 24,
  },
  key: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 67 / 2,
    width: 67,
    height: 67,
    backgroundColor: "#1A1A1A",
  },
  keyRed: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 88 / 2,
    width: 88,
    height: 86,
    backgroundColor: "#EB0000",
  },

  logo: {
    width: 153,
    height: 43,
    position: "absolute",
    bottom: 40,
  },
});

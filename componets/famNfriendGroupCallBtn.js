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
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import GroupCallScreen from "../screens/grouCallScreen/groupCallScreen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function Main() {
  const [showGroupCall, setShowGroupCall] = useState(true);
  return (
    <View style={styles.container}>
      {showGroupCall ? null : <GroupCallScreen />}

      <View style={styles.compholder}>
        <TouchableOpacity
          style={styles.callBtn1}
          onPress={() => setShowGroupCall(!showGroupCall)}
        >
          <Text style={styles.callBtnTxt}>Member</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.callBtn2}
          onPress={() => setShowGroupCall(!showGroupCall)}
        >
          <Text style={styles.callBtnTxt}>Family and Friends</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#555",
    zIndex: 999999,
    left: 0,
  },

  keyIcon: {
    width: 23,
    height: 22,
  },
  callBtn1: {
    backgroundColor: "#00981E",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 81,
    height: 37,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  callBtn2: {
    backgroundColor: "#00981E",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 141,
    height: 37,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  callBtnTxt: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 10,
    textAlign:'center'
  },
  cancleHolder: {
    backgroundColor: "#1A1A1A",
    width: 43,
    height: 37,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 5,
  },
  compholder: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 5,
    justifyContent:'space-between',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#707070",
    position: "absolute",
    bottom: 100,
    borderRadius: 10,
    zIndex: 99,
    elevation: 3,
  },
});

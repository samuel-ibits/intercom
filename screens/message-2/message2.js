import React from "react";
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
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Headerone from "../../componets/backHeader";

micHandle = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Mic Pressed",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

callHandle = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Call Pressed",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

vidHandle = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Video Pressed",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const DATA = [
  {
    id: "1",
    msgType: 0,
    message:
      "am done with the prototype read the user input. There are also other events, such as onSubmitEditing and onFocus that can be subscribed to.",
    time: "09:04AM",
  },
  {
    id: "2",
    msgType: 1,
    message: "am done with the prototype read the user input.",
    time: "09:04AM",
  },
  {
    id: "3",
    msgType: 0,
    message: "am done with the prototype read the.",
    time: "09:04AM",
  },

  {
    id: "4",
    msgType: 1,
    message:
      "am done with the prototype read the user input. There are also other events, such as onSubmitEditing and onFocus that can be subscribed to.",
    time: "09:04AM",
  },

  {
    id: "5",
    msgType: 0,
    message: "am done with the prototype read the user input. There are .",
    time: "09:04AM",
  },

  {
    id: "6",
    msgType: 0,
    message: "am done with the prototype read the user input. There are .",
    time: "09:04AM",
  },

  {
    id: "7",
    msgType: 0,
    message: "am done with the prototype read the user input. There are .",
    time: "09:04AM",
  },
];

const Item = ({ msgType, message, time }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={msgType == 0 ? styles.senderCard : styles.recieverCard}
  >
    <Text style={msgType == 0 ? styles.senderText : styles.recieverText}>
      {message}
    </Text>
    <Text style={msgType == 0 ? styles.sendertime : styles.recievertime}>
      {time}
    </Text>
  </TouchableOpacity>
);
export default function Main({ navigation }) {
  const renderItem = ({ item }) => (
    <Item message={item.message} time={item.time} msgType={item.msgType} />
  );
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#000000"
        barStyle={"light-content"}
        hidden={false}
      />
    
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.inputGroup}>
        <TextInput style={styles.input} placeholder="Write a message" />
        <FontAwesome5
          name="microphone"
          size={18}
          color="#000"
          onPress={micHandle}
        />
        <View style={styles.phoneVidIcon}>
          <MaterialCommunityIcons
            name="phone"
            size={18}
            color="#000"
            onPress={callHandle}
          />
          <FontAwesome5
            name="video"
            size={18}
            color="#000"
            onPress={vidHandle}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#E3E3E3",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  senderCard: {
    backgroundColor: "#1A1A1A",
    height: "auto",
    padding: 15,
    justifyContent: "space-around",
    borderRadius: 10,
    borderBottomleftRadius: 0,
    marginVertical: 10,
  },
  senderText: {
    color: "#fff",
    fontSize: 16,
  },
  sendertime: {
    fontSize: 9,
    textAlign: "left",
    color: "#fff",
    marginTop: 10,
  },
  recieverCard: {
    backgroundColor: "#fff",
    height: "auto",
    padding: 15,
    justifyContent: "space-around",
    borderRadius: 10,
    borderBottomRightRadius: 0,
    marginVertical: 10,
  },
  recieverText: {
    color: "#000",
    fontSize: 16,
  },
  recievertime: {
    fontSize: 9,
    textAlign: "right",
    color: "#000",
    marginTop: 10,
  },
  scroll: {
    alignItems: "center",
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    width: windowWidth - 30,
    padding: 5,
    borderRadius: 5,
  },
  phoneVidIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#7070708F",
    width: 70,
    padding: 5,
  },
  input: {
    width: "65%",
    padding: 10,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
  },
  headerHolder: {
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "100%",
    padding: 15,
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: "70%",
    fontSize: 13,
  },
  searchHolder: {
    backgroundColor: "#F8F8F8",
    flexDirection: "row",
    width: "50%",
    height: 31,
    borderWidth: 1,
    padding: 2,
    borderColor: "#707070",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -50,
  },
});

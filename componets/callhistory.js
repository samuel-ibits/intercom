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
} from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const DATA = [
  {
    id: "1",
    username: "Mark Chinadu",
    lstTxt: "Hello Mrs Mark i saw the big car under the tree, did you ?",
    image: require("../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },
  {
    id: "2",
    username: "Jane Doe",
    lstTxt: "Hello Mrs Mark i saw the big car under the tree, did you ?",
    image: require("../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },
  {
    id: "3",
    username: "Ibitoye Umoru",
    lstTxt:
      "Hello Mrs Mark i saw the big car under the tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },

  {
    id: "4",
    username: "Ibitoye Samuel",
    lstTxt:
      "Hello Mrs Mark i saw the big car under the tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },

  {
    id: "5",
    username: "Ibitoye Samuel",
    lstTxt:
      "Hello Mrs Mark i saw the big car under the tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },

  {
    id: "6",
    username: "Ibitoye Samuel",
    lstTxt:
      "Hello Mrs Mark i saw the big car under the tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },

  {
    id: "7",
    username: "Ibitoye Samuel",
    lstTxt:
      "Hello Mrs Mark i saw the big car under the tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../assets/user.png"),
    noOfMessages: "13",
    time: "09:00AM",
  },
  {
    id: "8",
    username: "Ibitoye Samuel",
    lstTxt:
      "Hello Mrs Mark i saw the big car under the tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },

  {
    id: "9",
    username: "Ibitoye Samuel",
    lstTxt:
      "Hello Mrs Mark i saw the big car under the tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },

  {
    id: "10",
    username: "Ibitoye Samuel",
    lstTxt:
      "Hello Mrs Mark i saw the big car under the tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },
];

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Item = ({ username, lstTxt, image, time, noOfMessages }) => (
  <TouchableOpacity activeOpacity={0.5} style={styles.messagecard}>
    <View style={styles.profilePic}>
      <Image style={styles.profilePic} source={image} />
    </View>
    <View style={styles.cardTextHolder}>
      <Text style={styles.useraname} numberOfLines={1}>
        {username}
      </Text>
      <View style={styles.timeNoOfMsg}>
        <Text style={styles.time} numberOfLines={1}>
          {time}
        </Text>
        <Text style={styles.noOfMessages} numberOfLines={1}>
          {noOfMessages}
        </Text>
      </View>
    </View>

    <View style={styles.lastCol}>
      <FontAwesome5 name="phone-alt" size={18} color="#000" />
    </View>
  </TouchableOpacity>
);

export default function main() {
  const renderItem = ({ item }) => (
    <Item
      username={item.username}
      lstTxt={item.lstTxt}
      image={item.image}
      time={item.time}
      noOfMessages={item.noOfMessages}
    />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00000029",
    alignItems: "center",
    justifyContent: "center",
  },
  messagecard: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    width: windowWidth,
    height: 95,
    justifyContent: "space-around",
  },
  useraname: {
    fontSize: 26,
    color: "#1A1A1A",
    textAlign:'left'
  },
  lastTxt: {
    fontSize: 9,
    color: "#1A1A1A",
    textAlign:'left'
  },
  profilePic: {
    width: 49,
    height: 48,
    borderRadius: 49/2,
  },
  
  time: {
    fontSize: 9,
  },
  noOfMessages: {
    backgroundColor: "#1A1A1A",
    color: "#fff",
    padding: 2,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 9,
    textAlign: "center",
    borderRadius: 4,
    minWidth: 18,
    height: 18,
    marginLeft: 5,
  },
  lastCol: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: 50,
  },
  timeNoOfMsg: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  cardTextHolder:{
    width:'50%'
  }
});

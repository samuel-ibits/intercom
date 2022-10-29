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
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const DATA = [
  {
    id: "1",
    username: "Mark Chinadu",
    lstTxt: "Hello Mrs Mark i saw the big car under the tree, did you ?",
    image: require("../../assets/user.png"),
    imageIcon: require("../../assets/misscall.png"),
    noOfMessages: "3",
    typeofNotification: "New Message",
    typeofNotificationID: 0,
    time: "09:00AM",
  },
  {
    id: "2",
    username: "Jane Doe",
    lstTxt:
      "Text strangers instantly, grow your socil circle, meet new people and experience making new friends.",
    image: require("../../assets/user.png"),
    imageIcon: require("../../assets/misscall.png"),
    noOfMessages: "3",
    typeofNotification: "Missed Call",
    typeofNotificationID: 1,
    time: "09:00AM",
  },
  {
    id: "3",
    username: "Ibitoye Umoru",
    lstTxt:
      "administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    imageIcon: require("../../assets/misscall.png"),
    noOfMessages: "3",
    typeofNotification: "New Message",
    typeofNotificationID: 0,
    time: "09:00AM",
  },

  {
    id: "4",
    username: "Ibitoye Samuel",
    lstTxt:
      " you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    imageIcon: require("../../assets/misscall.png"),
    noOfMessages: "3",
    typeofNotification: "Missed Call",
    typeofNotificationID: 1,
    time: "09:00AM",
  },

  {
    id: "5",
    username: "Ibitoye Samuel",
    lstTxt:
      "tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    imageIcon: require("../../assets/misscall.png"),
    noOfMessages: "3",
    typeofNotification: "New Message",
    typeofNotificationID: 0,
    time: "09:00AM",
  },

  {
    id: "6",
    username: "Ibitoye Samuel",
    lstTxt:
      "the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    imageIcon: require("../../assets/misscall.png"),
    noOfMessages: "3",
    typeofNotification: "Missed Call",
    typeofNotificationID: 1,
    time: "09:00AM",
  },

  {
    id: "7",
    username: "Ibitoye Samuel",
    lstTxt:
      "Hello Mrs Mark i saw the big car under the tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    imageIcon: require("../../assets/misscall.png"),
    noOfMessages: "13",
    typeofNotification: "New Message",
    typeofNotificationID: 0,
    time: "09:00AM",
  },
  {
    id: "8",
    username: "Ibitoye Samuel",
    lstTxt:
      "Hello Mrs Mark i saw the big car under the tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    imageIcon: require("../../assets/misscall.png"),
    noOfMessages: "3",
    typeofNotification: "New Message",
    typeofNotificationID: 1,
    time: "09:00AM",
  },
];

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Main({ navigation }) {
  const renderItem = ({ item }) => (
    <Item
      username={item.username}
      lstTxt={item.lstTxt}
      image={item.image}
      time={item.time}
      noOfMessages={item.noOfMessages}
      typeofNotification={item.typeofNotification}
      typeofNotificationID={item.typeofNotificationID}
      imageIcon={item.imageIcon}
    />
  );
  const Item = ({
    username,
    typeofNotification,
    lstTxt,
    image,
    time,
    noOfMessages,
    typeofNotificationID,
    imageIcon,
    item,
  }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.messagecard}
      onPress={() => navigation.navigate("message2")}
    >
      <View style={styles.profilePicHolder}>
        <Text
          style={
            typeofNotificationID == 1 ? styles.MissedCall : styles.NewMessage
          }
        >
          {typeofNotification}
        </Text>
        <Image style={styles.profilePic} source={image} />
      </View>
      <View style={styles.cardTextHolder}>
        <Text style={styles.useraname}>{username}</Text>
        <Text style={styles.lastTxt} numberOfLines={1}>
          {lstTxt}
        </Text>
      </View>

      <View style={styles.lastCol}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.noOfMessages}>{noOfMessages}</Text>
      </View>

      <Image
        style={styles.imageIcon}
        source={typeofNotificationID == 1 ? imageIcon : null}
      />
    </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    width: windowWidth - 20,
    height: 90,
    justifyContent: "space-around",
  },
  useraname: {
    fontSize: 18,
    color: "#1A1A1A",
  },
  lastTxt: {
    fontSize: 8,
    color: "#1A1A1A",
    width: "65%",
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 15,
  },
  cardTextHolder: {
    width: "65%",
  },
  time: {
    fontSize: 9,
    marginRight: 10,
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
  },
  lastCol: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
  },

  navBarHolder: {
    width: windowWidth,
    height: 72,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    width: 26,
    height: 26,
    fontSize: 26,
  },
  activeIcon: {
    width: 15,
    height: 13,
    fontSize: 26,
  },
  iconLong: {
    width: 26,
    height: 33,
    fontSize: 26,
  },
  navItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  ActiveNavItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 88,
    backgroundColor: "#1A1A1A",
    height: 49,
    borderRadius: 15,
  },
  ActiveText: {
    color: "#fff",
    fontSize: 13,
  },

  MissedCall: {
    fontSize: 12,
    width: "100%",
    marginBottom: 10,
    color: "#CC0000",
  },
  NewMessage: {
    fontSize: 12,
    width: "100%",
    marginBottom: 10,
    color: "#00981E",
  },
  imageIcon: {
    width: 17,
    height: 10,
    marginLeft: 20,
  },
});

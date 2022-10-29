import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const DATA = [
  {
    id: "1",
    username: "Mark Chinadu",
    lstTxt: "Hello Mrs Mark i saw the big car under the tree, did you ?",
    image: require("../../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },
  {
    id: "2",
    username: "Jane Doe",
    lstTxt:
      "Text strangers instantly, grow your socil circle, meet new people and experience making new friends.",
    image: require("../../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },
  {
    id: "3",
    username: "Ibitoye Umoru",
    lstTxt:
      "administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },

  {
    id: "4",
    username: "Ibitoye Samuel",
    lstTxt:
      " you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },

  {
    id: "5",
    username: "Ibitoye Samuel",
    lstTxt:
      "tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },

  {
    id: "6",
    username: "Ibitoye Samuel",
    lstTxt:
      "the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },

  {
    id: "7",
    username: "Ibitoye Samuel",
    lstTxt:
      "Hello Mrs Mark i saw the big car under the tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    noOfMessages: "13",
    time: "09:00AM",
  },
  {
    id: "8",
    username: "Ibitoye Samuel",
    lstTxt:
      "Hello Mrs Mark i saw the big car under the tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },

  {
    id: "9",
    username: "Ibitoye Samuel",
    lstTxt:
      "k i saw the big car under the tree, did you Check your proxy settingsyou don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },

  {
    id: "10",
    username: "Ibitoye Samuel",
    lstTxt:
      "Hello ntact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    noOfMessages: "3",
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
    />
  );
  const Item = ({ username, lstTxt, image, time, noOfMessages, item }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.messagecard}
      onPress={() => navigation.navigate("message2")}
    >
      <View style={styles.profilePic}>
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
      <View style={styles.headerHolder}>
        <View>
          <Image
            style={{ width: 86, height: 19, marginLeft: -30 }}
            source={require("../../assets/logo-example.png")}
          />
        </View>

        <View style={styles.searchHolder}>
          <TextInput style={styles.input} placeholder="Search" />
          <FontAwesome5
            name="search"
            size={18}
            color="#000"
            onPress={micHandle}
          />
        </View>

        <FontAwesome
          name="bell"
          size={18}
          color="#000"
          onPress={() => navigation.navigate("notification")}
        />
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.fixBtn,
          {
            position: "absolute",
            right: 30,
            bottom: 100,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            zIndex: 99,
            elevation: 3,
          },
        ]}
      >
        <Ionicons name="ios-chatbubbles-sharp" size={18} color="#fff" />
      </TouchableOpacity>
      <View style={styles.navBarHolder}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.navItem}
          onPress={() => navigation.navigate("historycontact")}
        >
          <Image
            style={styles.icon}
            source={require("../../assets/phonen.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.ActiveNavItem}
          onPress={() => navigation.navigate("message")}
        >
          <Image
            style={styles.activeIcon}
            source={require("../../assets/envoL.png")}
          />
          <Text style={styles.ActiveText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.navItem}
          onPress={() => navigation.navigate("comingsoon")}
        >
          <Image
            style={styles.icon}
            source={require("../../assets/layers.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.navItem}
          onPress={() => navigation.navigate("profile")}
        >
          <Image
            style={styles.iconLong}
            source={require("../../assets/people.png")}
          />
        </TouchableOpacity>
      </View>
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
    height: 95,
    justifyContent: "space-around",
  },
  useraname: {
    fontSize: 26,
    color: "#1A1A1A",
  },
  lastTxt: {
    fontSize: 9,
    color: "#1A1A1A",
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  cardTextHolder: {
    width: "65%",
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
  },
  lastCol: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  fixBtn: {
    position: "fixed",
    width: 48,
    height: 48,
    backgroundColor: "#1A1A1A",
    bottom: 20,
    right: 20,
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

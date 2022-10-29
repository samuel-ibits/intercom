import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Linking,
  ToastAndroid,
} from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import BottomNav from "../../nativigator/bottomNavBar/callBottomTabNav";
import Dailpad from "../../componets/dailpad";
import GroupCallBtn from "../../componets/groupcallbutton";
import GroupCallScreen from "../grouCallScreen/groupCallScreen";
import FontAwesome from "@expo/vector-icons/FontAwesome";

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
    lstTxt: "Hello Mrs Mark i saw the big car under the tree, did you ?",
    image: require("../../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },
  {
    id: "3",
    username: "Ibitoye Umoru",
    lstTxt:
      "Hello Mrs Mark i saw the big car under the tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },

  {
    id: "4",
    username: "Ibitoye Samuel",
    lstTxt:
      "Hello Mrs Mark i saw the big car under the tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },

  {
    id: "5",
    username: "Ibitoye Samuel",
    lstTxt:
      "Hello Mrs Mark i saw the big car under the tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },

  {
    id: "6",
    username: "Ibitoye Samuel",
    lstTxt:
      "Hello Mrs Mark i saw the big car under the tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
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
      "Hello Mrs Mark i saw the big car under the tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },

  {
    id: "10",
    username: "Ibitoye Samuel",
    lstTxt:
      "Hello Mrs Mark i saw the big car under the tree, did you Check your proxy settings or contact your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Main menu > Settings > Change Proxy Settings… > LAN Settings and deselect ",
    image: require("../../assets/user.png"),
    noOfMessages: "3",
    time: "09:00AM",
  },
];

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Main({ navigation }) {
  const openDialScreen = () => {
    let number = "";
    if (Platform.OS === "ios") {
      number = "telprompt:${091123456789}";
    } else {
      number = "tel:${091123456789}";
    }
    Linking.openURL(number);
    ToastAndroid.showWithGravityAndOffset(
      "keypad click",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  const renderItem = ({ item }) => (
    <Item
      username={item.username}
      lstTxt={item.lstTxt}
      image={item.image}
      time={item.time}
      noOfMessages={item.noOfMessages}
    />
  );

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

      <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
    </TouchableOpacity>
  );

  const [showDail, setShowDail] = useState(true);
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
      <TouchableOpacity
        onPress={() => setShowDail(!showDail)}
        activeOpacity={0.9}
        style={[
          styles.fixBtn,
          {
            position: "absolute",
            right: 10,
            bottom: 100,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            zIndex: 999,
            elevation: 3,
          },
        ]}
      >
        <Ionicons name="md-keypad-sharp" size={18} color="#fff" />
      </TouchableOpacity>

      <View style={styles.selectorContainer}>
        <TouchableOpacity style={styles.pageType} activeOpacity={0.5}>
          <Image
            style={{ width: 19, height: 19 }}
            source={require("../../assets/history.png")}
          />
          <Text style={styles.lightTxt}>Call history</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.pageType2]}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("contactHistory")}
        >
          <Image
            style={{ width: 19, height: 19 }}
            source={require("../../assets/contacts.png")}
          />
          <Text style={styles.darkTxt}>Contacts</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {showDail ? null : <Dailpad />}

      <View style={styles.navBarHolder}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.ActiveNavItem}
          onPress={() => navigation.navigate("historycontact")}
        >
          <Image
            style={styles.activeIcon}
            source={require("../../assets/phoneL.png")}
          />
          <Text style={styles.ActiveText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.navItem}
          onPress={() => navigation.navigate("message")}
        >
          <Image
            style={styles.icon}
            source={require("../../assets/envo.png")}
          />
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
      <GroupCallBtn />
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
    textAlign: "left",
  },
  lastTxt: {
    fontSize: 9,
    color: "#1A1A1A",
    textAlign: "left",
  },
  profilePic: {
    width: 49,
    height: 48,
    borderRadius: 49 / 2,
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
  cardTextHolder: {
    width: "50%",
  },
  selectorContainer: {
    width: windowWidth,
    padding: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  pageType: {
    backgroundColor: "#1A1A1A",
    width: "50%",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  pageType2: {
    backgroundColor: "#fff",
    width: "50%",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#707070",
  },
  lightTxt: {
    color: "#fff",
    marginLeft: 10,
  },
  darkTxt: {
    color: "#000",
    marginLeft: 10,
  },
  fixBtn: {
    position: "fixed",
    width: 48,
    height: 48,
    backgroundColor: "#1A1A1A",
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
    width: 18,
    height: 18,
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
  checkBox: {
    width: 20,
    height: 20,
    backgroundColor: "#eee",
    borderWidth: 6,
    borderColor: "#1a1a1a",
    borderRadius: 2,
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

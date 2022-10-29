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
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Dailpad from "../../componets/dailpad";
import GroupCallBtn from "../../componets/famNfriendGroupCallBtn";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const A = [
  {
    id: "1",
    name: "Ameh Sunday",
    image: require("../../assets/user.png"),
  },
  {
    id: "2",
    name: "Ameh Sunday",
    image: require("../../assets/user.png"),
  },
  {
    id: "3",
    name: "Ameh Sunday",
    image: require("../../assets/user.png"),
  },
  {
    id: "4",
    name: "Ameh Sunday",
    image: require("../../assets/user.png"),
  },
  {
    id: "5",
    name: "Ameh Sunday",
    image: require("../../assets/user.png"),
  },
  {
    id: "6",
    name: "Ameh Sunday",
    image: require("../../assets/user.png"),
  },
];

const B = [
  {
    id: "1",
    name: "Benedicta rafael",
    image: require("../../assets/user.png"),
  },
  {
    id: "2",
    name: "Benedicta rafael",
    image: require("../../assets/user.png"),
  },
  {
    id: "3",
    name: "Benedicta rafael",
    image: require("../../assets/user.png"),
  },
  {
    id: "4",
    name: "Benedicta rafael",
    image: require("../../assets/user.png"),
  },
  {
    id: "5",
    name: "Benedicta rafael",
    image: require("../../assets/user.png"),
  },
  {
    id: "6",
    name: "Benedicta rafael",
    image: require("../../assets/user.png"),
  },
];

const Item = ({ name, image }) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.contactCard}>
    <Image style={styles.profilePic} source={image} />
    <Text style={styles.username} numberOfLines={1}>
      {name}
    </Text>
  </TouchableOpacity>
);

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
  const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;

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

      <View style={styles.selectorContainer}>
        <TouchableOpacity
          style={styles.pageType2}
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{ width: 19, height: 19 }}
            source={require("../../assets/historyd.png")}
          />
          <Text style={styles.darkTxt}>Call history</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.pageType]} activeOpacity={0.5}>
          <Image
            style={{ width: 19, height: 19 }}
            source={require("../../assets/contactsl.png")}
          />
          <Text style={styles.lightTxt}>Contacts</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.positioning}>
        <View style={styles.section}>
          <Text style={styles.sectionHead}>A</Text>
          <FlatList
            data={A}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHead}>B</Text>
          <FlatList
            data={B}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
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
    height: "100%",
    backgroundColor: "#E3E3E3",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sectionHead: {
    fontSize: 26,
    marginLeft: 30,
  },
  contactCard: {
    flexDirection: "row",
    padding: 1,
    alignItems: "center",
    justifyContent: "space-around",
    width: "95%",
    marginVertical: 4,
  },
  profilePic: {
    width: 49,
    height: 48,
    borderRadius: 49 / 2,
  },
  username: {
    fontSize: 22,
    color: "#1A1A1A",
    textAlign: "left",
    width: "70%",
    marginLeft: 10,
  },
  section: {
    backgroundColor: "white",
    padding: 10,
    height: 414,
    width: windowWidth - 20,
    alignItems: "flex-start",
    borderRadius: 10,
    marginVertical: 5,
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
    justifyContent: "space-around",
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

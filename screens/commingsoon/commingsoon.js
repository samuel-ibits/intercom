import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
  ScrollView,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const DATA = [
  {
    id: "1",
    title: "Loan",
    image: require("../../assets/money-bill-wave.png"),
  },
  {
    id: "2",
    title: "Training",
    image: require("../../assets/school.png"),
  },
  {
    id: "3",
    title: "Resources",
    image: require("../../assets/settings.png"),
  },
  {
    id: "4",
    title: "Investment",
    image: require("../../assets/piggy-bank.png"),
  },
  {
    id: "5",
    title: "E-market place",
    image: require("../../assets/supermarket.png"),
  },
  {
    id: "6",
    title: "E-market place",
    image: require("../../assets/handshake.png"),
  },
];

const Item = ({ title, image }) => (
  <TouchableOpacity activeOpacity={0.5} style={styles.messagecard}>
    <View style={styles.iconImage}>
      <Image style={styles.iconImageImg} source={image} />
    </View>
    <View style={styles.cardTextHolder}>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);
searchHandle = () => {
  ToastAndroid.showWithGravityAndOffset(
    "Search Pressed",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

export default function Main({ navigation }) {
  const renderItem = ({ item }) => (
    <Item title={item.title} image={item.image} />
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
      <View style={styles.navBarHolder}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.navItem}
          onPress={() => navigation.navigate("historycontact")}
        >
          <Image
            style={styles.activeIcon}
            source={require("../../assets/phonen.png")}
          />
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
          style={styles.ActiveNavItem}
          onPress={() => navigation.navigate("comingsoon")}
        >
          <SimpleLineIcons
            name="layers"
            size={12}
            color="#fff"
            style={styles.icon}
          />

          <Text style={styles.ActiveText}>VAS</Text>
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
    height: "100%",
    backgroundColor: "#E3E3E3",
    alignItems: "center",
  },

  input: {
    width: "60%",
    fontSize: 13,
  },
  searchHolder: {
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "90%",
    borderWidth: 1,
    padding: 10,
    borderColor: "#707070",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  contactHolder: {
    width: "95%",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  messagecard: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "space-around",
    marginVertical: 3,
    height: 95,
    width: windowWidth - 40,
  },
  title: {
    fontSize: 20,
    width: "60%",
    color: "#1A1A1A",
    textAlign: "left",
    fontWeight: "500",
  },

  iconImage: {
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImageImg: {
    width: "80%",
    height: "80%",
  },
  cardTextHolder: {
    width: "70%",
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

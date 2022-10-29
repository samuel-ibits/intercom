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


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Main ({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#000000"
        barStyle={"light-content"}
        hidden={false}
      />
      <View style={styles.navBarHolder}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.ActiveNavItem}
          onPress={() => navigation.navigate('message')}
        >
          <Image
            style={styles.activeIcon}
            source={require("../../assets/phoneL.png")}
          />
          <Text style={styles.ActiveText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.navItem} onPress={() => navigation.navigate("message")}>
          <Image
            style={styles.icon}
            source={require("../../assets/envo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.navItem}>
          <Ionicons
            name="md-list-sharp"
            size={18}
            color="#1A1A1A"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.navItem}>
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
    justifyContent: "flex-end",
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
});

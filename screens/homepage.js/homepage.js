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
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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

      <Image
        style={{ width: 163, height: 50, marginVertical: 30 }}
        source={require("../../assets/logo-example.png")}
      />

      <TouchableOpacity activeOpacity={0.5} style={styles.messagecard} onPress={() => navigation.navigate("historycontact")}>
        <View style={styles.iconImage}>
          <Image
            style={styles.iconImageImg}
            source={require("../../assets/phonen.png")}
          />
        </View>
        <View style={styles.cardTextHolder}>
          <Text style={styles.title} numberOfLines={1}>
            Call
          </Text>
        </View>
        <MaterialCommunityIcons
          name="greater-than"
          size={18}
          color="#1A1A1A"
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.5} style={styles.messagecard} onPress={() => navigation.navigate("message")}>
        <View style={styles.iconImage}>
          <Image
            style={styles.iconImageImg}
            source={require("../../assets/envo.png")}
          />
        </View>
        <View style={styles.cardTextHolder}>
          <Text style={styles.title} numberOfLines={1}>
            Message
          </Text>
        </View>
        <MaterialCommunityIcons
          name="greater-than"
          size={18}
          color="#1A1A1A"
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={styles.messagecard} onPress={() => navigation.navigate("comingsoon")}>
        <View style={styles.iconImage}>
          <Image
            style={styles.iconImageImg}
            source={require("../../assets/layers.png")}
          />
        </View>
        <View style={styles.cardTextHolder}>
          <Text style={styles.title} numberOfLines={1}>
            VAS
          </Text>
        </View>
        <MaterialCommunityIcons
          name="greater-than"
          size={18}
          color="#1A1A1A"
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={styles.messagecard}  onPress={() => navigation.navigate("profile")}>
        <View style={styles.iconImage}>
          <Image
            style={styles.iconImageImg4}
            source={require("../../assets/people.png")}
          />
        </View>
        <View style={styles.cardTextHolder}>
          <Text style={styles.title} numberOfLines={1}>
            Profile
          </Text>
        </View>
        <MaterialCommunityIcons
          name="greater-than"
          size={18}
          color="#1A1A1A"
          style={styles.icon}
        />
      </TouchableOpacity>
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
  iconImageImg4: {
    width: "80%",
    height: "100%",
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
});

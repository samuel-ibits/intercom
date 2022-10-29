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
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

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
const A = [
  {
    id: "1",
    name: "Ameh Sunday",
    image: require("../assets/user.png"),
  },
  {
    id: "2",
    name: "Ameh Sunday",
    image: require("../assets/user.png"),
  },
  {
    id: "3",
    name: "Ameh Sunday",
    image: require("../assets/user.png"),
  },
  {
    id: "4",
    name: "Ameh Sunday",
    image: require("../assets/user.png"),
  },
  {
    id: "5",
    name: "Ameh Sunday",
    image: require("../assets/user.png"),
  },
  {
    id: "6",
    name: "Ameh Sunday",
    image: require("../assets/user.png"),
  },
];

const B = [
  {
    id: "1",
    name: "Benedicta rafael",
    image: require("../assets/user.png"),
  },
  {
    id: "2",
    name: "Benedicta rafael",
    image: require("../assets/user.png"),
  },
  {
    id: "3",
    name: "Benedicta rafael",
    image: require("../assets/user.png"),
  },
  {
    id: "4",
    name: "Benedicta rafael",
    image: require("../assets/user.png"),
  },
  {
    id: "5",
    name: "Benedicta rafael",
    image: require("../assets/user.png"),
  },
  {
    id: "6",
    name: "Benedicta rafael",
    image: require("../assets/user.png"),
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

keypad = () => {
    ToastAndroid.showWithGravityAndOffset(
      "keypad click",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };
  
export default function main() {
  const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#000000"
        barStyle={"light-content"}
        hidden={false}
      />

<TouchableOpacity
          activeOpacity={0.9}
          style={[
            styles.fixBtn,
            {
              position: "absolute",
              right: 30,
              bottom: 30,
              justifyContent: "center",
              alignItems: "center",
              borderRadius:10,
              zIndex:99
            },
          ]}

          onPress={keypad}
        >
          <Ionicons name="md-keypad-sharp" size={18} color="#fff" />
        </TouchableOpacity>

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

  fixBtn: {
    position: "fixed",
    width: 48,
    height: 48,
    backgroundColor: "#1A1A1A",
    bottom: 20,
    right: 20,
  },
});

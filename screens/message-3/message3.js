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
import FontAwesome from "@expo/vector-icons/FontAwesome";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const DATA = [
  {
    id: "1",
    name: "Mark Chinadu",
    subTxt: "Hello Mr adams how are you",
    image: require("../../assets/user.png"),
  },
  {
    id: "2",
    name: "John Mattew",
    subTxt: "",
    image: require("../../assets/user.png"),
  },
  {
    id: "3",
    name: "Mark Chinadu",
    subTxt: "Hello Mr adams how are you",
    image: require("../../assets/user.png"),
  },
  {
    id: "4",
    name: "Blessing John",
    subTxt: "Hello Mr adams how are you",
    image: require("../../assets/user.png"),
  },
  {
    id: "5",
    name: "Newman Paul",
    subTxt: "Hello Mr adams how are you",
    image: require("../../assets/user.png"),
  },
  {
    id: "6",
    name: "joy Lucy",
    subTxt: "",
    image: require("../../assets/user.png"),
  },
];

const Item = ({ name, subTxt, image }) => (
  <TouchableOpacity activeOpacity={0.5} style={styles.messagecard}>
    <View style={styles.profilePic}>
      <Image style={styles.profilePic} source={image} />
    </View>
    <View style={styles.cardTextHolder}>
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
      <Text style={styles.subTxt} numberOfLines={1}>
        {subTxt}
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
    <Item name={item.name} image={item.image} subTxt={item.subTxt} />
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

        <View style={styles.searchHolder2}>
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
      <View style={styles.searchHolder}>
        <TextInput style={styles.input} placeholder="Search" />
        <FontAwesome5
          name="search"
          size={18}
          color="#00000029"
          onPress={searchHandle}
        />
      </View>

      <View style={styles.contactHolder}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    marginVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "space-around",
  },
  name: {
    fontSize: 26,
    width: "100%",
    color: "#1A1A1A",
    textAlign: "left",
  },
  subTxt: {
    fontSize: 9,
    color: "#1A1A1A",
    textAlign: "left",
    width: "100%",
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  cardTextHolder: {
    width: "70%",
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
  searchHolder2: {
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

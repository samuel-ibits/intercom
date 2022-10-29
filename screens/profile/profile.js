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
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

edit = () => {
  ToastAndroid.showWithGravityAndOffset(
    "edit Pressed",
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

export default function Main({navigation}) {
  return (
    <View style={styles.container}>
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
      <View style={styles.profilePicHolder}>
        <Image
          style={styles.profilePic}
          source={require("../../assets/user.png")}
        />

        <TouchableOpacity style={styles.iconHolder}>
          <FontAwesome5 name="pen" size={15} color="#000" onPress={edit} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.profileInfo}>
          <View style={styles.profileInfoSub}>
            <FontAwesome5
              name="user-alt"
              size={18}
              color="#000"
              onPress={edit}
            />
            <Text style={styles.name} numberOfLines={1}>
              Mark Chinadu
            </Text>
          </View>
          <TouchableOpacity style={styles.iconInfo}>
            <FontAwesome5 name="pen" size={15} color="#000" onPress={edit} />
          </TouchableOpacity>
        </View>

        <View style={styles.profileInfo}>
          <View style={styles.profileInfoSub}>
            <FontAwesome5
              name="phone-alt"
              size={18}
              color="#000"
              onPress={edit}
            />
            <Text style={styles.name} numberOfLines={1}>
              +234 0000 00000
            </Text>
          </View>
          <TouchableOpacity style={styles.iconInfo}>
            <FontAwesome5 name="pen" size={15} color="#000" onPress={edit} />
          </TouchableOpacity>
        </View>

        <View style={styles.profileInfo}>
          <View style={styles.profileInfoSub}>
            <FontAwesome5
              name="envelope-open-text"
              size={18}
              color="#000"
              onPress={edit}
            />
            <Text style={styles.name} numberOfLines={1}>
              MarkChinadu@gmail.com
            </Text>
          </View>
          <TouchableOpacity style={styles.iconInfo}>
            <FontAwesome5 name="pen" size={15} color="#000" onPress={edit} />
          </TouchableOpacity>
        </View>
      </View>

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
          style={styles.ActiveNavItem}
          onPress={() => navigation.navigate("profile")}
        >
          <Image
            style={styles.activeIcon}
            source={require("../../assets/profileW.png")}
          />
          
          <Text style={styles.ActiveText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width:'100%',
    backgroundColor: "#E3E3E3",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    color: "#1a1a1a",
    textAlign: "left",
    width: "80%",
  },
  profileInfo: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  profileInfoSub: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    alignItems: "center",
  },
  profilePicHolder: {
    padding: 20,
    width: windowWidth - 15,
    height: 229,
    justifyContent: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 10,
    marginTop:10
  },
  profilePic: {
    width: 190,
    height: 190,
    borderRadius: 190 / 2,
  },
  iconHolder: {
    width: 30,
    height: 30,
    borderRadius: 15,
    position: "absolute",
    left: windowWidth - 40,
    top: 20,
  },
  infoContainer: {
    padding: 20,
    width: windowWidth - 15,
    height: 211,
    justifyContent: "space-around",
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  navBarHolder: {
    width: windowWidth,
    height: 72,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    bottom:0,
    position:'absolute'
  },
  icon: {
    width: 26,
    height: 26,
    fontSize: 26,
  },
  activeIcon: {
    width: 15,
    height: 19,
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

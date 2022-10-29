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
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Dailpad from "../../componets/dailpad";

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
  {
    id: "7",
    name: "Ameh Sunday",
    image: require("../../assets/user.png"),
  },
  {
    id: "8",
    name: "Ameh Sunday",
    image: require("../../assets/user.png"),
  },
  {
    id: "9",
    name: "Ameh Sunday",
    image: require("../../assets/user.png"),
  },
  {
    id: "10",
    name: "Ameh Sunday",
    image: require("../../assets/user.png"),
  },
];

const numOfColm = 3;
const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;
const Item = ({ name, image }) => (
  <TouchableOpacity style={styles.contactCard}>
    <Image style={styles.profilePic} source={image} />
    <Text style={styles.username} numberOfLines={1}>
      {name}
    </Text>
  </TouchableOpacity>
);

export default function GroupCallScreen() {
  const [showCall, setShowCall] = useState(true);
  return (
    <View style={styles.comholder}>
     <StatusBar
        animated={true}
        backgroundColor="#000000"
        barStyle={"light-content"}
        hidden={false}
      />
      {showCall ? (
        <View style={styles.container}>
          <View style={styles.container2}>
            <View style={styles.callerHolder}>
              <FlatList
                data={A}
                renderItem={renderItem}
                numColumns={numOfColm} 
                keyExtractor={(item) => item.id
                }
              />
            </View>
            <View>
              <View style={styles.keyHolder}>
                <View style={styles.row}>
                  <TouchableOpacity  style={styles.key}>
                    <Image
                      style={styles.keyIcon}
                      source={require("../../assets/keypad.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity  style={styles.key}>
                    <Image
                      style={styles.keyIconPause}
                      source={require("../../assets/pause.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity  style={styles.key}>
                    <Image
                      style={styles.keyIconaddCo}
                      source={require("../../assets/person-add.png")}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  <TouchableOpacity  style={styles.key}>
                    <Image
                      style={styles.keyIconnoSound}
                      source={require("../../assets/no-sound.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    
                    style={styles.keyRed}
                    onPress={() => setShowCall(!showCall)}
                  >
                    <Image
                      style={styles.keyRedIcon}
                      source={require("../../assets/call-end.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity  style={styles.key}>
                    <Image
                      style={styles.keyIconSound}
                      source={require("../../assets/sound.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <Image
              style={styles.logo}
              source={require("../../assets/logo-example.png")}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  comholder: {
    left: 0,
    flex: 1,
    top:-windowHeight - 170,
    left:-windowWidth/4.5,
    height:windowHeight,
    width:windowWidth,
    position:'absolute'
  },
  container: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop:200,
    marginLeft:80,
    zIndex: 999999,
  },
  container2: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "#FFFFFF",
    left: 0,
  },
  callerHolder:{
    width:windowWidth-20,
    justifyContent: 'space-around',
    alignItems:'center',
    height:windowHeight/2,
  }

  ,
  keyHolder: {
    width: windowWidth - 30,
    height: windowHeight / 3,
    justifyContent: "space-around",
  },
  row: {
    width: windowWidth - 30,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  dp: {
    width: "80%",
    height: "100%",
  },
  dpHolder: {
    width: 106,
    height: 106,
    borderRadius: 106 / 2,
    backgroundColor: "#ccc",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 30,
  },
  dpHolderSection: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -100,
  },
  name: {
    fontSize: 30,
    color: "#1A1A1A",
    marginTop: 20,
  },
  keyIcon: {
    width: 23,
    height: 22,
  },
  keyIconPause: {
    width: 17,
    height: 21,
  },
  keyIconaddCo: {
    width: 26,
    height: 21,
  },
  keyRedIcon: {
    width: 43,
    height: 16,
  },
  keyIconSound: {
    width: 23,
    height: 19,
  },
  keyIconnoSound: {
    width: 29,
    height: 24,
  },
  key: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 67 / 2,
    width: 67,
    height: 67,
    backgroundColor: "#1A1A1A",
  },
  keyRed: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 88 / 2,
    width: 88,
    height: 86,
    backgroundColor: "#EB0000",
  },

  logo: {
    width: 153,
    height: 43,
    position: "absolute",
    bottom: -250,
  },
  profilePic: {
    width: 49,
    height: 48,
    borderRadius: 49 / 2,
  },
  username: {
    fontSize: 13,
    color: "#1A1A1A",
    textAlign: "left",
    width: "100%",
    marginLeft: 10,
  },
  contactCard:{
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'column',
    width:windowWidth/3.5,
    padding:20,
    borderWidth:1,
    borderColor:'#707070',
    margin:5,
    borderRadius:10
  }
});

import * as React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  FlatList,
  StatusBa,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function App({ navigation }) {
  return (
    <View style={styles.headerHolder}>
      <View>
        <Image
          style={{ width: 86, height: 19, marginLeft: -30 }}
          source={require("../assets/logo-example.png")}
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
        onPress={() => navigation.navigate("profile")}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  headerHolder: {
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    padding: 4,
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

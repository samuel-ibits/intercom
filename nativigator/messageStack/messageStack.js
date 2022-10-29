import * as React from "react";
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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Message from "../../screens/message/message";
import Message2 from "../../screens/message-2/message2";
import Headerone from "../../componets/generalHeader";
import BackHeader from "../../componets/backHeader";
import HistoryContact from "../../screens/historyContact/historycontact"
import ContactHistory from "../../screens/historyContact/contactHistory"

const Stack = createNativeStackNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="message">
        <Stack.Screen
          name="message"
          component={Message}
          options={{ headerTitle: () => <Headerone /> }}
        />
        <Stack.Screen
          name="message2"
          component={Message2}
          options={{ headerTitle: () => <BackHeader /> }}
        />
         <Stack.Screen
          name="historyContact"
          component={HistoryContact}
          options={{ headerTitle: () => <BackHeader /> }}
        />
         <Stack.Screen
          name="contactHistory"
          component={ContactHistory}
          options={{ headerTitle: () => <BackHeader /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

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
import HistoryContact from "../../screens/historyContact/historycontact";
import ContactHistory from "../../screens/historyContact/contactHistory";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="historycontact">
        <Stack.Screen
          name="historycontact"
          component={HistoryContact}
          options={{ headerTitle: () => <Headerone /> }}
        />
        <Stack.Screen
          name="contactHistory"
          component={ContactHistory}
          options={{
            headerTitle: () => <Headerone />,
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

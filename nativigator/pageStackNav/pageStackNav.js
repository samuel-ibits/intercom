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
import Message3 from "../../screens/message-3/message3";
import Profile from "../../screens/profile/profile";
import CommingSoon from "../../screens/commingsoon/commingsoon";
import ContactHistory from "../../screens/historyContact/historycontact";
import Headerone from "../../componets/generalHeader";
import HeaderTwo from "../../componets/backHeader";
import ConStack from "../../screens/historyContact/contactHistory";
import Login from "../../screens/login/login";
import Register from "../../screens/registration/registration";
import NotificationScreen from "../../screens/notifAlert/notifAlert";
import HomePage from "../../screens/homepage.js/homepage";


const Stack = createNativeStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="home"
          component={HomePage}
          options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="notification"
          component={NotificationScreen}
          options={{
            headerTitle: () => <Headerone />,
          }}
        />
        <Stack.Screen
          name="headerone"
          component={Headerone}
          options={{
            headerTitle: () => <Headerone />,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="headertTwo"
          component={HeaderTwo}
          options={{
            headerTitle: () => <HeaderTwo />,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="historycontact"
          component={ContactHistory}
          options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="contactHistory"
          component={ConStack}
          options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="message"
          component={Message}
          options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="message2"
          component={Message2}
          options={{
            headerTitle: () => <Headerone />,
          }}
        />

        <Stack.Screen
          name="message3"
          component={Message3}
           options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="comingsoon"
          component={CommingSoon}
           options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
           options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

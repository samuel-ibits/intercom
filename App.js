import React from 'react';
import { View, Text } from 'react-native';
import Login from './screens/login/login';
import Reg from './screens/registration/registration';
import Signup from './screens/signup/signup';
import Message from './screens/message/message';
import Message2 from './screens/message-2/message2';
import Message3 from './screens/message-3/message3';
import CommingSoon from './screens/commingsoon/commingsoon';
import Profile from './screens/profile/profile';
import Callhistory from './componets/callhistory';
import Contacts from './componets/contacts';
import MessageStacknavigator from './nativigator/messageStack/messageStack';
import PageStack from './nativigator/pageStackNav/pageStackNav';
import ContactStack from './nativigator/contact/contactStack';
import History from './screens/historyContact/historycontact';
import TabNav from './nativigator/bottomNavBar/callBottomTabNav';
import Coding from './screens/commingsoon/coding'
import Dailpad from './componets/dailpad'
import CallScreen from './screens/callScreen/callScreen';
import GroupCallBtn from './componets/groupcallbutton';
import GroupCallScreen from './screens/grouCallScreen/groupCallScreen';
import NofiAlert from './screens/notifAlert/notifAlert';
import Homepage from './screens/homepage.js/homepage';


export default function Main() {
  return (
   <PageStack />
  );
}

import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Screens/Home'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import Menu from './src/Screens/Menu';
import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'test',
    body: 'this is a test',
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}



const Tab = createBottomTabNavigator();

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  return (

    // <NavigationContainer>
    //   <Tab.Navigator>
    //   <Tab.Screen name = "Home" component={Home} options={{tabBarLabel:'Home',tabBarIcon:()=>(<MaterialCommunityIcons name="home" size={35} color="black"/>)}}/>
    //   <Tab.Screen name = "Login" component={Login} options={{tabBarLabel:'Login',tabBarIcon:()=>(<MaterialCommunityIcons name="Login" size={35} color="black"/>)}}/>
    //     <Tab.Screen name = "SignUp" component={SignUp} options={{tabBarLabel:'SignUp',tabBarIcon:()=>(<MaterialCommunityIcons name="SignUp" size={35} color="black"/>)}}/>
    //     <Tab.Screen name = "Menu" component={Menu} options={{tabBarLabel:'Menu',tabBarIcon:()=>(<MaterialCommunityIcons name="SignUp" size={35} color="black"/>)}}/>
    //   </Tab.Navigator>

    // </NavigationContainer>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
    <Text>Your expo push token: {expoPushToken}</Text>
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Title: {notification && notification.request.content.title} </Text>
      <Text>Body: {notification && notification.request.content.body}</Text>
      <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
    </View>
    <Button
      title="Press to Send Notification"
      onPress={async () => {
        await sendPushNotification(expoPushToken);
      }}
    />
  </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

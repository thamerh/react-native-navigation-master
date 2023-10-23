import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../secreens/home/homeSecreen"
import ProfileScreen from '../secreens/profile/profileSecreen'
import NotificationSecreen from '../secreens/notification/notificationSecreen';
import SettingSecreen from '../secreens/setting/settingSecreen';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../constants/colors';
import { StyleSheet, TouchableOpacity } from 'react-native' ;
import CustomTabBarButton from '../component/CustomTabBarButton'
import CustomTabBar from '../component/CustomTabBar';
import {useNavigation} from '@react-navigation/native';




const Tab = createBottomTabNavigator();

function BottomTabNavigation(props) {
        const navigation = useNavigation();
  
  return (
    <Tab.Navigator  initialRouteName={props.route && props.route.params.params?  props.route.params.params :"feed"}   
    tabBar={props => <CustomTabBar {...props} />}
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarInactiveTintColor: COLORS.dark,
      tabBarStyle: styles.tabBarStyle,
      tabBarActiveTintColor: COLORS.primary,
      tabBarIcon : ({color, size, focused}) => {
        let iconName;

        if (route.name === "feed") {
          iconName = focused ? 'home-outline' : 'home-sharp';
        } else if (route.name === "setting") {
          iconName = focused ? 'cog-outline' : 'cog';
        } else if (route.name === "profile") {
          iconName = focused ? 'person-circle-outline' : 'person-circle-sharp';
        } else if (route.name === "notification") {
          iconName = focused
            ? 'notifications-circle-outline'
            : 'notifications-circle-sharp';
        }

        return <Icon name={iconName} size={25} color={color} />;
      },
    })}
    >
     <Tab.Screen
  name="feed"
  component={HomeScreen}
  initialParams={{params :"homed"}}
  options={
    { 
    tabBarLabel: 'Feeds',
    title: 'Feed',
    headerShown: true,
    
    tabBarButton: (props) => <CustomTabBarButton route="feed" {...props} />,
    headerLeft: () => {
      return (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon
            name={"menu-sharp"}
            size={30}
            color={COLORS.dark}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      );
    },
  }}
/>

      <Tab.Screen name="profile" 
      component={ProfileScreen} 
      initialParams={{params :"profiled"}}
      options={{
        tabBarLabel: 'Profile',
        title: 'profile',
        headerShown: true,
        tabBarButton: (props) => <CustomTabBarButton  route="profile" {...props} />,
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon
                name={"menu-sharp"}
                size={30}
                color={COLORS.dark}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          );
        },
      }}/>
      <Tab.Screen name="notification" component={NotificationSecreen} 
      initialParams={{params :"notificationd"}}
      options={{
        tabBarButton: (props) => <CustomTabBarButton route="notification" {...props} />,
        tabBarLabel: 'Notification',
        title: 'notification',
        headerShown: true,
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon
                name={"menu-sharp"}
                size={30}
                color={COLORS.dark}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          );
        },
      }}/>
      <Tab.Screen name="setting" 
      component={SettingSecreen} 
      initialParams={{params :"settingd"}}
      options={{
        tabBarButton: (props) => <CustomTabBarButton  route="setting" {...props} />,
        tabBarLabel: 'Setting',
        title: 'setting',
        headerShown: true,
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon
                name={"menu-sharp"}
                size={30}
                color={COLORS.dark}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          );
        },
      }}/>
    </Tab.Navigator>
  );
}
export default BottomTabNavigation;
const styles = StyleSheet.create({
      tabBarStyle: {
        position: 'absolute',
        backgroundColor: COLORS.transparent,
        borderTopWidth: 0,
        bottom: 15,
        right: 9,
        left: 9,
        height: 65,
        elevation: 0,
      },
  });
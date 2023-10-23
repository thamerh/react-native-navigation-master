import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS} from '../constants';
import ProfileScreen from '../secreens/profile/profileSecreen';
import BottomTabNavigator from './bottomTabNavigation';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../component/CustomDrawer';
import NotificationSecreen from '../secreens/notification/notificationSecreen';
import SettingSecreen from '../secreens/setting/settingSecreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator(props) {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName={props.route && props.route.params.params?  props.route.params.params :"homed"}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name={"homed"}
        component={BottomTabNavigator}
        initialParams={{params :"feed"}}
        options={{
          title: 'Feed',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home-sharp" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={"profiled"}
        component={BottomTabNavigator}
        initialParams={{params :"profile"}}
        options={{
          title: 'profile',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="person-circle-outline" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={"notificationd"}
        initialParams={{params :"notification"}}
        component={BottomTabNavigator}
        options={{
          title: 'Notifications',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="notifications" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={"settingd"}
        initialParams={{params :"setting"}}
        component={BottomTabNavigator}
        options={{
          title: 'Setting',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="cog" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed'
import CreatePost from '../screens/CreatePost'
import { Platform, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator =()=>{
   return(
       <Tab.Navigator
        labeled={false}
        barStyle={this.state.light_theme
            ? styles.bottomTabStyleLight
            : styles.bottomTabStyle}
         screenOptions={({route}) => ({
           tabBarIcon:({ focused, color, size }) => {
               let iconName;
               if (route.name === 'Feed'){
                   iconName = focused ? 'book' : 'book-outline';
               } else if (route.name === 'CreatePost'){
                   iconName = focused ? 'create' : 'create-outline';
               }
               return <Ionicons name ={iconName} size={size} color={color} />
           },
         })}
         tabBarOptions={{
             activeTintColor:"tomato",
             inactiveTintColor: "gray",
         }}
    >
        <Tab.Screen name="Feed" component={Feed}/>
        <Tab.Screen name="CreatePost" component={CreatePost}/>
    </Tab.Navigator>
   );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#2f345d",
        height: "8%",
        borderTopLeftRadius: RFValue(30),
        borderTopRightRadius: RFValue(30),
        overflow: "hidden",
        position: "absolute"
      },
      bottomTabStyleLight: {
        backgroundColor: "#eaeaea",
        height: "8%",
        borderTopLeftRadius: RFValue(30),
        borderTopRightRadius: RFValue(30),
        overflow: "hidden",
        position: "absolute"
      },
      icons: {
        width: RFValue(30),
        height: RFValue(30)
      }
})
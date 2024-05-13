import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Agenda from "./Agenda";
import Home from "./Home";
import DetalleContacto from "./DetalleContacto";

const tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <tab.Navigator initialRouteName="Home">
        <tab.Screen name="Home" component={Home}></tab.Screen>
        <tab.Screen name="Agenda" component={Agenda}></tab.Screen>
        <tab.Screen name="DetalleContacto" component={DetalleContacto}></tab.Screen>
      </tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
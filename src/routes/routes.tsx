import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/home";
import Home2 from "../pages/home2";
import Profile from "../pages/profile";
import Games from "../pages/games"

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Home2"
            component={Home2}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Games"
            component={Games}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

export default Routes;
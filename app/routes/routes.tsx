import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../home";
import Home2 from "../home2";

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
    </Stack.Navigator>
);

export default Routes;
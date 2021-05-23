import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Admin from "../Screens/Admin/Admin";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Admin"
        component={Admin}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function AdminNavigator() {
  return <MyStack />;
}

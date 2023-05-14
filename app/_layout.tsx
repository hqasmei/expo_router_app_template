import React, { useState } from "react";
import { View, Text } from "react-native";

import { Stack } from "expo-router";

const StackLayout = () => {
  const [session, setSession] = useState(false);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!session ? (
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
      )}
    </Stack>
  );
};

export default StackLayout;

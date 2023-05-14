import React, { useState } from "react";
import { View, Text } from "react-native";

import { Stack } from "expo-router";

const MainLayout = () => {
  return (
    <Stack initialRouteName="(tabs)" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MainLayout;

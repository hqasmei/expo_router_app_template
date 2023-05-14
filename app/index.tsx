import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useRouter } from "expo-router";

const LandingPage = () => {
  const router = useRouter();

  const handlePress = () => {
    router.replace("home");
  };

  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity onPress={handlePress}>
        <Text>Landing Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingPage;

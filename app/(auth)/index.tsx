import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useRouter } from "expo-router";

const LandingPage = () => {
  const router = useRouter();

  return (
    <View className="justify-center items-center flex-1">
      <Text>Landing Page</Text>
      <View className="flex flex-col space-y-4 items-center mt-2">
        <TouchableOpacity
          onPress={() => router.replace("login")}
          className="bg-blue-500 py-2 px-4 rounded-lg"
        >
          <Text className="text-white font-semibold">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.replace("register")}
          className="bg-green-600 py-2 px-4 rounded-lg"
        >
          <Text className="text-white font-semibold">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingPage;

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const LoginPage = () => {
  const router = useRouter();

  return (
    <View className="justify-center items-center flex-1">
      <View className="flex flex-col space-y-4 items-center">
        <TouchableOpacity
          className="flex flex-row items-center justify-center space-x-1"
          onPress={() => router.replace("/")}
        >
          <Ionicons name="arrow-back" size={18} color="black" />
          <Text>Back</Text>
        </TouchableOpacity>
        <Text>Login Page</Text>

        <TouchableOpacity
          className="bg-gray-500 py-2 px-4 rounded-lg"
          onPress={() => router.replace("home")}
        >
          <Text className="text-white">Go to Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;

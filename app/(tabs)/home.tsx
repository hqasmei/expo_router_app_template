import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Link, Stack } from "expo-router";
import { useRouter } from "expo-router";

const HomePage = () => {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity onPress={() => router.replace("/")}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;

import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons"; // Note the corrected import statement
SplashScreen.preventAutoHideAsync();

const Page = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"), // Corrected font name
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
  });

  useEffect(() => {
    if (fontError) {
      throw fontError;
    }

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "",
            // headerStyle: { backgroundColor: "red" },
            // headerTintColor: "white",
            headerShadowVisible: false,
            headerBackTitle: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(auth)"
          options={{
            title: "",
            // headerStyle: { backgroundColor: "red" },
            // headerTintColor: "white",
            headerShadowVisible: false,
            headerBackTitle: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            title: "",
            // headerStyle: { backgroundColor: "red" },
            // headerTintColor: "white",
            headerShadowVisible: false,
            headerBackTitle: "",
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default Page;

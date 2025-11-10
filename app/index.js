// Import React hooks and components from React Native
import { useState } from "react";
import { View, Text, ScrollView } from "react-native";

// Import navigation helpers from Expo Router
import { Stack, useRouter } from "expo-router";

// Safe area wrapper to avoid notch / status bar overlap
import { SafeAreaView } from "react-native-safe-area-context";

// Import your constants (colors, images, icons, fonts, spacing)
import { COLORS, icons, images, SIZES, FONTS } from "../constants";

// Import UI components used in the screen
import {
  Nearbyjobs, // Component showing nearby jobs
  Popularjobs, // Component showing popular jobs
  ScreenHeaderBtn, // Custom header button component
  Welcome, // Welcome/search header component
} from "../components";

const Home = () => {
  const router = useRouter(); // Handles navigation between screens

  return (
    // SafeAreaView ensures content does not overlap with device notches
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Configure the top header of the screen */}
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite }, // Header background
          headerShadowVisible: false, // Hide bottom shadow under header

          // Left header button (menu icon)
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),

          // Right header button (profile picture)
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),

          headerTitle: "", // Remove default header text
        }}
      />

      {/* Enable vertical scrolling for the whole screen */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium, // Add consistent padding around content
          }}
        >
          {/* Top section: Welcome message + search bar */}
          <Welcome />

          {/* Section showing popular job cards */}
          <Popularjobs />

          {/* Section showing nearby job listings */}
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

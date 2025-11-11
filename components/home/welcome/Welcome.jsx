import { useState } from "react";
// Import native mobile components
import {
  View,             // Container element (similar to a div)
  Text,             // Display text (similar to a p or span)
  TextInput,        // User input field (similar to an input tag)
  TouchableOpacity, // Pressable element (similar to a button)
  Image,
  FlatList,         // Efficient list rendering component
} from "react-native";

import { useRouter } from "expo-router"; // Used for navigation between screens
import styles from "./welcome.style";    // Import component-specific styles
import { icons } from "../../../constants"; // App-wide icons set

const Welcome = () => {
  const router = useRouter(); // Initialize router for future navigation actions

  return (
    <View>
      {/* Top section: Welcome message and subtitle */}
      <View style={styles.welcome}>
        <Text style={styles.userName}>Hello there !</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      {/* Search section containing an input field */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          {/* Text input for entering search keywords */}
          <TextInput style={styles.searchInput} />
        </View>
      </View>
    </View>
  );
};

export default Welcome;

import { useState } from "react";
// Import native mobile components
import {
  View, // Container element (similar to a <div>)
  Text, // Text display (similar to <p> or <span>)
  TextInput, // Text input field for user search
  TouchableOpacity, // Pressable UI wrapper (similar to a button)
  Image, // Used for rendering images/icons
  FlatList, // Optimized list component for rendering many items
} from "react-native";

import { useRouter } from "expo-router"; // Used for navigation between screens
import styles from "./welcome.style"; // Import local component styling
import { icons, SIZES } from "../../../constants"; // App-wide icon set and sizing constants

// Predefined list of job categories for tab buttons
const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  const router = useRouter(); // Router instance for page navigation

  // Track which job type tab is currently active
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      {/* ======= Header Welcome Section ======= */}
      <View style={styles.welcome}>
        <Text style={styles.userName}>Hello there.</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      {/* ======= Search Input Section ======= */}
      <View style={styles.searchContainer}>
        {/* Search input wrapper */}
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value="" // Currently empty – can be connected to state later
            onChange={() => {}} // Placeholder handler – replace with search logic
            placeholder="What are you looking for?" // Input placeholder text
          />
        </View>

        {/* Search button */}
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      {/* ======= Job Type Tabs Section ======= */}
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes} // List of job type categories
          horizontal // Display tabs in a horizontal row
          contentContainerStyle={{ columnGap: SIZES.small }} // Spacing between tabs
          // Render each tab item
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)} // Dynamic style for active/inactive tab
              onPress={() => {
                setActiveJobType(item); // Update selected tab
                router.push(`/search/${item}`); // Navigate to search results page
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item} // Unique key for each tab
        />
      </View>
    </View>
  );
};

export default Welcome;

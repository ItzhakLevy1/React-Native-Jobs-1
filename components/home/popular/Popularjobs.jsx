import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { useRouter } from "expo-router";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

// Component responsible for displaying the most popular jobs
const Popularjobs = () => {
  const router = useRouter();

  // Temporary placeholders — will later be replaced with real API state
  const isLoading = false; // Indicates if data is currently loading
  const error = false; // Indicates if an error occurred during fetch

  return (
    <View style={styles.container}>
      {/* ======= Section Header: Title + "Show All" Button ======= */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>

        {/* Button for navigating to a full list of jobs */}
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      {/* ======= Cards List Section ======= */}
      <View style={styles.cardsContainer}>
        {/* Loading state using a pre built react native spinner */}
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          // Error state
          <Text>Something went wrong</Text>
        ) : (
          // Display the list of jobs using FlatList
          <FlatList
            data={[1, 2, 3, 4]} // Temporary mock data — will later come from API
            /* Render each job card */
            renderItem={({ item }) => (
              <PopularJobCard
                item={item} // Pass job item to card component
              />
            )}
            /* Each job must have a unique key (job_id from API later) */
            keyExtractor={(item) => item?.job_id}
            /* Adds horizontal spacing between cards */
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal // Scrollable row layout
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;

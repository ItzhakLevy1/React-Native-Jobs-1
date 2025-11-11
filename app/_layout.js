import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync(); // When the app is loading this will make the splash screen visible

const Layout = () => {
  // Import fonts
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DBMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DBRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    // Only show the home page if the fonts have been loaded
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  // If the fonts have been loaded
  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;

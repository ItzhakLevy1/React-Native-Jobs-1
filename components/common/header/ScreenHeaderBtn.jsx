// Import basic UI components from React Native
import { TouchableOpacity, Image } from "react-native";

// Import the stylesheet for this component
import styles from "./screenheader.style";

// Reusable header button component
// Props:
// - iconUrl: the image shown inside the button
// - dimension: size of the image (width/height)
// - handlePress: function that runs when the button is pressed
const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    // TouchableOpacity makes the element tappable with visual feedback
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      {/* The icon shown inside the header button */}
      <Image
        source={iconUrl} // image file to display
        resizeMode="cover" // keep aspect ratio while filling space
        style={styles.btnImg(dimension)} // dynamic styling based on size
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;

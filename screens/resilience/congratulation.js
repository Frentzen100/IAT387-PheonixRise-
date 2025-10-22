import { Text, View, TouchableOpacity, Image } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import mainStyles from "../../stylesheet/main";
import theoryStyles from "../../stylesheet/theory";
import {Ionicons, MaterialCommunityIcons, MateriallCommunityIcons} from '@expo/vector-icons';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function Congratulation() {

  const route = useRoute();
  const { durationSeconds } = route.params || { durationSeconds: 0 };
  const minutes = Math.floor(durationSeconds / 60);
  const seconds = durationSeconds % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={mainStyles.container}>
      {/* Phoenix and trophy illustration */}
      <Image
        source={require("../../assets/phoenixCongratulation.png")}
        style={theoryStyles.congratulateImage}
        resizeMode="contain"
      />

      {/* Heading */}
      <Text style={[mainStyles.heading1, theoryStyles.congratulationHeading]}>
        Congratulations!
      </Text>

      {/* Subtext */}
      <Text style={[theoryStyles.congratulationParagraph]}>
        You are one step closer to achieving a resilience mindset
      </Text>

      {/* Stats row */}
      <View style={theoryStyles.statRow}>
        {/* Exercise */}
        <View style={[theoryStyles.statBox, { padding: 8, borderWidth: 1, borderRadius: 10, borderColor: "#34B1E6" }]}>
          <MaterialCommunityIcons
            name="brain"
            size={28}
            color="#34B1E6"
            marginBottom={8}
            />
          <Text style={[mainStyles.heading2, { color: "#34B1E6" }]}>3</Text>
          <Text style={[mainStyles.captionText, theoryStyles.statLabel, , { color: "#34B1E6" }]}>
            Total{"\n"}Exercise
          </Text>
        </View>

        {/* Time */}
        <View style={[theoryStyles.statBox, {  padding: 8, borderWidth: 1, borderRadius: 10, borderColor: "#7481A8" }]}>
          <Ionicons
            name="time"
            size={28}
            color="#7481A8"
            marginBottom={8}
            />
          <Text style={[mainStyles.heading2, { color: "#7481A8" }]}>{formattedTime}</Text>
          <Text style={[mainStyles.captionText, theoryStyles.statLabel, , { color: "#7481A8" }]}>
            Resilience{"\n"}Minutes
          </Text>
        </View>

        {/* Gratitude */}
        <View style={[theoryStyles.statBox, {  padding: 8, borderWidth: 1, borderRadius: 10, borderColor: "#F291AE" }]}>
          <Ionicons
            name="heart"
            size={28}
            color="#F291AE"
            marginBottom={8}
        />
          <Text style={[mainStyles.heading2, { color: "#F291AE" }]}>3</Text>
          <Text style={[mainStyles.captionText, theoryStyles.statLabel, { color: "#F291AE" }]}>
            Total{"\n"}Gratitudes
          </Text>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={[mainStyles.largeButton, { marginTop: 40 }]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={mainStyles.buttonText}>You’re stronger now</Text>
      </TouchableOpacity>
    </View>
  );
}

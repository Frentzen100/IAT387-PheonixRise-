import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import mainStyles from '../../stylesheet/main';
import onboardingStyles from '../../stylesheet/onboarding';

export default function CreateAccount() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleStart = () => {
    navigation.navigate("Tutorial", { username, email });
  };

  return (
    <View style={mainStyles.container}>
      {/* Heading */}
      <Text style={onboardingStyles.appTitle}>Welcome to PheonixRise!</Text>
      <Text style={onboardingStyles.appSlogan}>
        Where you rise from burnout, {"\n"}fly to success
      </Text>

      {/* Username */}
      <Text style={mainStyles.label}>Username</Text>
      <TextInput
        style={mainStyles.input}
        placeholder="Type your name here."
        placeholderTextColor="#A0A0A0"
        value={username}
        onChangeText={setUsername}
      />

      {/* Email */}
      <Text style={mainStyles.label}>Email</Text>
      <TextInput
        style={mainStyles.input}
        placeholder="Type your email here."
        placeholderTextColor="#A0A0A0"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password */}
      <Text style={mainStyles.label}>Password</Text>
      <View style={onboardingStyles.passwordContainer}>
        <TextInput
          style={[onboardingStyles.passwordInput, { flex: 1, borderWidth: 0 }]}
          placeholder="Type your password here."
          placeholderTextColor="#A0A0A0"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={onboardingStyles.eyeIcon}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={22}
            color="#0C1B4D"
          />
        </TouchableOpacity>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={[
          styles.button,
          !(username && email && password.trim()) && styles.disabledButton,
        ]}
        disabled={!(username && email && password.trim())}
        onPress={handleStart}
      >
        <Text style={styles.buttonText}>Let’s Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#0C1B4D",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: "#4E5D94",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 20,
  },
 
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C6CCE6",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginBottom: 30,
    paddingRight: 10,
  },
  eyeIcon: {
    padding: 6,
  },
  button: {
    backgroundColor: "#0C1B4D",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#B2B8D2",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
});

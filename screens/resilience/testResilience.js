import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TestResilience() {
  const [response, setResponse] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const evaluateResponse = async () => {
    if (!response.trim()) return;

    setIsLoading(true);
    try {
     const res = await fetch("http://localhost:3000/api/evaluate-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userResponse: response }),
      });

      const data = await res.json();

      if (data.headline && data.paragraph) {
        setFeedback({
          headline: data.headline,
          paragraph: data.paragraph,
        });
      } else {
        setFeedback({
          headline: "Something went wrong 😅",
          paragraph: "Try rephrasing your message or check your connection.",
        });
      }
    } catch (error) {
      console.error(error);
      setFeedback({
        headline: "Network error 🌐",
        paragraph: "Unable to connect to the AI service. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResponse("");
    setFeedback(null);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton}>
        <Ionicons name="close" size={28} color="#333" />
      </TouchableOpacity>

      <View style={styles.progressBarBackground}>
        <View style={styles.progressBarFill} />
      </View>

      <Text style={styles.title}>Scenario 2</Text>

      <Image
        source={require("../../assets/scenario2Image.png")}
        style={styles.scenarioImage}
        resizeMode="contain"
      />

      <Text style={styles.question}>What would you say?</Text>

      {!feedback ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Add your response"
            placeholderTextColor="#A0A0A0"
            multiline
            value={response}
            onChangeText={setResponse}
          />

          <TouchableOpacity
            style={[styles.checkButton, !response.trim() && { opacity: 0.6 }]}
            onPress={evaluateResponse}
            disabled={!response.trim() || isLoading}
          >
            {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.checkButtonText}>Check</Text>}
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={styles.feedbackBox}>
            <Text style={styles.feedbackHeadline}>{feedback.headline}</Text>
            <Text style={styles.feedbackParagraph}>{feedback.paragraph}</Text>
          </View>

          <TouchableOpacity style={styles.continueButton} onPress={handleReset}>
            <Text style={styles.continueButtonText}>Keep Growing</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FF",
    paddingHorizontal: 24,
    paddingTop: 50,
  },
  closeButton: { position: "absolute", top: 45, left: 20 },
  progressBarBackground: {
    height: 10,
    width: "90%",
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 40,
  },
  progressBarFill: { height: "100%", width: "70%", backgroundColor: "#6AD66A", borderRadius: 10 },
  title: { fontSize: 20, fontWeight: "600", marginTop: 30, color: "#1C1C1C" },
  scenarioImage: { width: "100%", height: 180, marginTop: 20, alignSelf: "center" },
  question: { fontSize: 16, color: "#333", marginTop: 25, marginBottom: 8 },
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: "#D0D0D0",
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    textAlignVertical: "top",
    backgroundColor: "#FAFAFA",
  },
  checkButton: {
    backgroundColor: "#8B95C9",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 30,
  },
  checkButtonText: { color: "white", fontWeight: "600", fontSize: 16 },
  feedbackBox: {
    backgroundColor: "#EDF2FF",
    borderWidth: 1,
    borderColor: "#C3D1F5",
    borderRadius: 12,
    padding: 18,
    marginTop: 20,
  },
  feedbackHeadline: { fontSize: 18, fontWeight: "700", color: "#2C3E6C", marginBottom: 8 },
  feedbackParagraph: { fontSize: 15, color: "#3E4A6E", lineHeight: 22 },
  continueButton: {
    backgroundColor: "#2C3E6C",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 30,
  },
  continueButtonText: { color: "white", fontWeight: "600", fontSize: 16 },
});

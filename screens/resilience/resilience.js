import { StatusBar } from 'expo-status-bar';
import {Text, View, TouchableOpacity, Modal, Image, Animated, Easing, Dimensions } from 'react-native';
import { useState, useEffect, useRef } from 'react';
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { resilienceQuestions } from "../../question";

import mainStyles from '../../stylesheet/main';
import theoryStyles from '../../stylesheet/theory';

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function Resilience({route}) {
  // Debug: log route params on mount
 // console.log('ROUTE PARAMS:', route?.params);
  const navigation = useNavigation();
  const retryIndexes = route?.params?.retryIndexes ?? null;
  const passedStartTime = route?.params?.startTime || null;

  // If retryIndexes is present, we're in retry mode, otherwise normal mode
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [checked, setChecked]= useState(false);
  const [sheetVisible, setSheetVisible] = useState(false);
  // Modal slide animation
  const modalAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  // Store incorrect question indexes from the first pass
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);
  // For retry mode, track mistakes in a new array
  const [retryMistakes, setRetryMistakes] = useState([]);

  // Determine which question to show
  const currentQuestionIndex = retryIndexes ? retryIndexes[index] : index;
  // Debug: log current state
  //console.log('retryIndexes:', retryIndexes, 'index:', index, 'currentQuestionIndex:', currentQuestionIndex);
  const question = resilienceQuestions[currentQuestionIndex];
  const correctIndex = question.options.findIndex(opt => opt === question.correctAnswer);
  const outcome = checked && selected !== null ? (selected === correctIndex ? "correct" : "wrong") : null;

  const total = retryIndexes ? retryIndexes.length : resilienceQuestions.length;
  const isLast = index === total - 1;
  const currentPosition = index + 1;
  const progress = (currentPosition) / (total);

  // Animated progress bar
  const progressAnim = useRef(new Animated.Value(progress)).current;

  //Start timerr when quiz begins
  const [startTime, setStartTime] = useState(passedStartTime || null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if(!passedStartTime){
      setStartTime(Date.now());
    }
  }, []);

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 400,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [progress]);

  //UI for the sheet modal
  const sheetBackground = outcome === "correct" ? "#D3F5DD" : "#FCE49C";
  const modalCtaText = outcome === "correct" ? ( isLast ? "Keep Going" : "Keep Going") : "Continue";
  const modalHeading = checked && selected !== null ? question.affirmationHeading[selected] : "";
  const modalParagraph = checked && selected !== null ? question.affirmationParagraph[selected] : ""; 

  let scenarioImage = null;

  if (question.scenarioNumber === 1){
    scenarioImage = require('../../assets/scenario1Image.png');
  }
  if (question.scenarioNumber === 2){
    scenarioImage = require('../../assets/scenario2Image.png');
  }
   if (question.scenarioNumber === 3){
    scenarioImage = require('../../assets/scenario3Image.png');
  }
  
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (checked && selected !== null) {
      setSheetVisible(true);
    }
  }, [checked, selected]);

  useEffect(() => {
    if(sheetVisible){
      Animated.timing(modalAnim,{
        toValue: 0,
        duration: 350,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(modalAnim,{
        toValue: SCREEN_HEIGHT,
        duration: 250,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }).start();
    }
  }, [sheetVisible])


  const onSelect = (i) => {
    setSelected(i);   //you select this option
    setChecked(false);    //Hide feedback until user press "Check"
  }

  const onCheck = () => {
    console.log('onCheck called. selected:', selected, 'retryIndexes:', retryIndexes, 'index:', index, 'currentQuestionIndex:', currentQuestionIndex);
    if (selected === null) return;

    const isAnswerCorrect = question.options[selected] === question.correctAnswer;

    if (!isAnswerCorrect) {
      if (!retryIndexes) {
        // First pass: store original question index
        setIncorrectQuestions(prev => {
          const updated = !prev.includes(currentQuestionIndex) ? [...prev, currentQuestionIndex] : prev;
          console.log('incorrectQuestions updated:', updated);
          return updated;
        });
      } else {
        // Retry round: store mistakes in retryMistakes
        setRetryMistakes(prev => {
          const updated = !prev.includes(currentQuestionIndex) ? [...prev, currentQuestionIndex] : prev;
          console.log('retryMistakes updated:', updated);
          return updated;
        });
      }
    }

    // Reset modalAnim to bottom before showing 
    modalAnim.setValue(SCREEN_HEIGHT);
    setChecked(true);
    setSheetVisible(true);
  };

  const finishQuiz = () => {
    const endTime = Date.now();
    const durationMs = endTime - startTime;
    const durationSeconds = Math.floor(durationMs / 1000);

    //console.log('finishQuiz called. retryIndexes:', retryIndexes, 'retryMistakes:', retryMistakes, 'incorrectQuestions:', incorrectQuestions);
    if (retryIndexes) {
      // In retry mode, if there are still mistakes, allow another retry round, else finish
      if (retryMistakes.length > 0) {
        setIndex(0); // Reset to first question in new retry round
        setRetryMistakes([]); // Clear mistakes for next round
        navigation.replace('TryAgain', { incorrectQuestions: retryMistakes, startTime });
      } else {
        navigation.navigate('Congratulation', {durationSeconds});
      }
    } else {
      // Normal mode: if there are mistakes, go to TryAgain with incorrectQuestions
      if (incorrectQuestions.length > 0) {
        navigation.navigate('TryAgain', { incorrectQuestions, startTime });
      } else {
        navigation.navigate('Congratulation', {durationSeconds} );
      }
    }
  };

  const goNext = () => {
    if (isLast) {
      finishQuiz();
    } else {
      setIndex(prev => prev + 1);
      setSelected(null);
      setChecked(false);
    }
  };

  const isCorrect = checked && selected !== null && question.options[selected] === question.correctAnswer;
  const affHeading = checked && selected !== null ? question.affirmationHeading[selected] : null;
  const affParagraph = checked && selected !== null ? question.affirmationParagraph[selected] : null;
  
  const optionButtons = question.options.map((opt, i) => {
    let buttonStyle = [mainStyles.optionButton];
    if (selected === i && !checked)
      buttonStyle.push(mainStyles.selectedOptionButton);
    if (checked && i === selected && question.options[i] === question.correctAnswer)
      buttonStyle.push(mainStyles.correctOptionButton);
    if (checked && i === selected && question.options[i] !== question.correctAnswer)
      buttonStyle.push(mainStyles.wrongOptionButton);

    return (
      <TouchableOpacity key={i} onPress={() => onSelect(i)}
        style={buttonStyle} disabled={checked}>
        <Text style={mainStyles.optionText}>{opt}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <View style={mainStyles.container}>

      <View style ={theoryStyles.theoryHeaderRow}>
        <TouchableOpacity onPress={""}>
          <Ionicons name="close" style={mainStyles.closeIcon} />
        </TouchableOpacity>

        <View style={theoryStyles.progressWrap}>
          <View style={theoryStyles.progressTrack}>
            <Animated.View
              style={[
                theoryStyles.progressFill,
                {
                  width: progressAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0%', '100%'],
                  }),
                },
              ]}
            />
          </View>

          <View style={theoryStyles.progressLabelContainer}>
            <Text style={theoryStyles.progressLabel}>
              {total - currentPosition} {total - currentPosition === 1 ? 'question' : 'questions'} left
            </Text>
          </View>
        </View>
      </View>

      <Text style={mainStyles.heading2}>Scenario {question.scenarioNumber}</Text>

      <Image 
          source ={scenarioImage}
          style = {theoryStyles.scenarioImage}
          resizeMode = "contain"
      />

      <Text style={mainStyles.paragraph}>{question.scenario}</Text>

      <View style={theoryStyles.optionContainer}>
        {optionButtons}
      </View>
      
      <TouchableOpacity style={[mainStyles.largeButton, selected === null && mainStyles.largeButtonDisabled]} onPress={onCheck}>
        <Text style={mainStyles.buttonText}> {"Check"} </Text>
      </TouchableOpacity>

      <Modal 
        visible = {sheetVisible}
        transparent
        animationType ="none"
        onRequestClose={() => setSheetVisible(false)}
        >
        
        <Animated.View 
          style ={[theoryStyles.modalSheet, {backgroundColor: sheetBackground, transform: [{translateY: modalAnim}]}]}>
          <Text style={[mainStyles.boldParagraph, theoryStyles.modalHeadline]}> {modalHeading} </Text>
          <Text style={[mainStyles.paragraph, theoryStyles.modalParagraph]}> {modalParagraph} </Text>

          <TouchableOpacity style={[mainStyles.largeButton, theoryStyles.modalButton]}
           
            onPress = {() =>{
              setSheetVisible(false);
              goNext();
              }}
            >
              <Text style={mainStyles.buttonText}>{modalCtaText}</Text>
          </TouchableOpacity>
        </Animated.View>
      </Modal>


      <StatusBar style="auto" />
    </View>
  );
}








import {Text, View, TouchableOpacity, TextInput, Image, Modal  } from 'react-native';
import { useState, useRef, useEffect} from 'react';

import { Ionicons } from '@expo/vector-icons';

import mainStyles from '../../stylesheet/main';
import theoryStyles from '../../stylesheet/theory';

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';

export default function DailyGratitude() {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    const navigation = useNavigation();

    const [gratitude1, setGratitude1] = useState("")
    const [gratitude2, setGratitude2] = useState("")
    const [gratitude3, setGratitude3] = useState("")

    const [step, setStep] = useState(1);
    const [infoVisible, setInfoVisible] = useState(false);

    const r1 = useRef(null);
    const r2 = useRef(null);
    const r3 = useRef(null);

    const canContinue = [gratitude1, gratitude2, gratitude3].some(v => v.trim().length > 0)
    const currentValue = step === 1 ? gratitude1 : step === 2 ? gratitude2 : gratitude3;
    const primaryLabel = step < 3 ? "Next" : "Finish";

    useEffect(()=> {
      if (step === 1) r1.current?.focus();
      if (step === 2) r2.current?.focus();
      if (step === 3) r3.current?.focus();
    }, [step]);

    const onPrimaryPress = () =>{
      if (step < 3){
        if (!currentValue.trim()) return;
        setStep(step + 1)
        return;
      }

      if(!gratitude3.trim()) return;
      onFinish();
    }

    const onFinish = () => {
        const items = [gratitude1, gratitude2, gratitude3].filter(Boolean).map((v, i) => ({ key: `g${i}`, value: v.trim() }));
        navigation.navigate("Resilience");
    }

    const primaryDisabled =
    step < 3 ? !currentValue.trim() : !gratitude3.trim();

    return (
    <View style={mainStyles.container}>
      <TouchableOpacity onPress={""}>
        <Ionicons name="close" style={mainStyles.closeIcon} />
      </TouchableOpacity>
      
      <View style={theoryStyles.gratitudeHeaderRow}>
        <Text style={mainStyles.heading2}>Daily Gratitudes</Text>
        <TouchableOpacity onPress={()=> setInfoVisible(true)}>
          <Ionicons name="information-circle-outline" size={24} color="#001B62" marginBottom = "12"/>
        </TouchableOpacity>
      </View>

      <Modal
        visible={infoVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setInfoVisible(false)}
>
        <TouchableOpacity
          style = {theoryStyles.outsideInformationContainer}
          activeOpacity={1}
          onPressOut={() => setInfoVisible(false)}
        >
        <View
          style = {theoryStyles.informationContainer}
        >
        <Text style = {theoryStyles.informationText}> Practicing gratitude reminds you of the positive things in your life. Write down what you're thankful for.</Text>
    </View>
  </TouchableOpacity>
</Modal>

      <Image
        source ={require('../../assets/gratitudeImage.png')}
        style = {theoryStyles.gratitudeImage}
        resizeMode = "contain"
       />

      <Text style={[mainStyles.boldParagraph, theoryStyles.gratitudeLabel]}>Briefly describe your gratitude</Text>

      <TextInput 
        ref = {r1}
        value ={gratitude1}
        onChangeText = {setGratitude1}
        placeholder="Add your first gratitude"
        placeholderTextColor="#8E8E93"
        style={[
          mainStyles.input,
          (step === 1 || gratitude1.trim()) ? mainStyles.inputEnabled : mainStyles.inputDisabled
        ]}
        editable = {step === 1}
       />

       <TextInput 
        ref = {r2}
        value ={gratitude2}
        onChangeText = {setGratitude2}
        placeholder="Add your second gratitude"
        placeholderTextColor="#8E8E93"
        style={[
          mainStyles.input,
          (step === 2 || gratitude2.trim()) ? mainStyles.inputEnabled : mainStyles.inputDisabled
        ]}
        editable = {step === 2}
       />

       <TextInput
        value ={gratitude3}
        onChangeText = {setGratitude3}
        placeholder="Add your third gratitude"
        placeholderTextColor="#8E8E93"
        style={[
          mainStyles.input,
          (step === 3 || gratitude3.trim()) ? mainStyles.inputEnabled : mainStyles.inputDisabled
        ]}
        editable = {step === 3}
       />

      <TouchableOpacity style={[mainStyles.largeButton2, primaryDisabled && mainStyles.disabledButton]} 
        onPress={onPrimaryPress}
        disabled = {primaryDisabled}
      >
        <Text style={mainStyles.buttonText}> {primaryLabel} </Text>
      </TouchableOpacity>

       <TouchableOpacity style={mainStyles.skipButton2} onPress={onFinish}>
        <Text style={mainStyles.skipButtonText}> {"Skip"} </Text>
      </TouchableOpacity>

    </View>
  );
}








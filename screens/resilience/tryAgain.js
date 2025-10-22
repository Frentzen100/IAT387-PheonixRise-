import {Text, View, TouchableOpacity, Image } from 'react-native';
import { useRoute, useNavigation} from '@react-navigation/native';

import mainStyles from '../../stylesheet/main';
import theoryStyles from '../../stylesheet/theory';

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function TryAgain() {
    const route = useRoute();
    const startTime = route?.params.startTime || null;
    const navigation = useNavigation();
    const { incorrectQuestions} = route.params || {incorrectQuestions: []};

    const retryFirstWrong = () => {
        if (incorrectQuestions.length > 0){
            navigation.navigate('Resilience', {retryIndexes: incorrectQuestions, startTime});
        }
    };

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    return (
    <View style={mainStyles.container}>
        <View style = {theoryStyles.tryAgainContainer}>
            <Image 
                source ={require('../../assets/tryAgain.png')}
                style = {theoryStyles.tryAgainImage}
                resizeMode = "contain"
            />
        </View>

        <View style={theoryStyles.quoteContainer}>
            <Text style={theoryStyles.quoteText}>
                “The greatest glory in living lies not in never falling, but in rising
                every time we fall”
            </Text>
            <Text style={theoryStyles.quoteAuthor}>— Nelson Mandela</Text>
        </View>

        <TouchableOpacity style={mainStyles.largeButton} onPress={retryFirstWrong}>
            <Text style={mainStyles.buttonText}> {"Go back"} </Text>
        </TouchableOpacity>
    </View>
  );
}


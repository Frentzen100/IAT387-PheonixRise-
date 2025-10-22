import {Text, View, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import { useState, useRef} from 'react';
import { useNavigation } from '@react-navigation/native';

import mainStyles from '../../stylesheet/main';
import onboardingStyles from '../../stylesheet/onboarding';

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

const {width} = Dimensions.get('window');

const slides = [
    {
        id: "1",
        image: require("../../assets/tutorialImage1.png"),
        text:"Long time ago, when human discovered fire, an invisible pheonix was borned, an ancient creature that symbolize renewal  ",
    },
    {
        id: "2",
        image: require("../../assets/tutorialImage2.png"),
        text:"It has the ability to sense the bitter smoke of academic burnout due to exhausting from workload",
    },
    {
        id: "3",
        image: require("../../assets/tutorialImage3.png"),
        text:"Don't worry, it's here to provide mindset guidance to help you overcome academic burnout and build lasting resilience",
    }
];

export default function Tutorial() {

    const navigation = useNavigation();

    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({viewableItems}) => {
        if(viewableItems.length > 0) setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;

    const handleNext = () => {
        if(currentIndex < slides.length - 1){
            slidesRef.current.scrollToIndex({index: currentIndex + 1});
        } else{
            navigation.replace('DailyGratitude');
        }
    };

    const handleSkip = ()=> {
        navigation.replace('DailyGratitude');
    };

    const renderItem = ({item}) => (
        <View style = {[onboardingStyles.tutorialSlide, {width}]}>
            <Image source = {item.image} style ={onboardingStyles.tutorialImage} resizeMode ="contain"/>
            <Text style={onboardingStyles.tutorialText}>{item.text}</Text>
        </View>
    );

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });

    return (
    <View style={mainStyles.container}>
        <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}      
        />

        {/* Pagination Dots */}
        <View style={onboardingStyles.dotsContainer}>
            {slides.map((_, index) => (
            <View
                key={index}
                style={[
                onboardingStyles.dot,
                currentIndex === index && onboardingStyles.activeDot,
                ]}
            />
            ))}
        </View>

        {/*Buttons*/}
        <TouchableOpacity style={mainStyles.largeButton} onPress={handleNext}>
            <Text style ={mainStyles.buttonText}>
                {currentIndex === slides.length - 1 ? "Get Started" : "Next"}
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSkip}  style={mainStyles.skipButton}>
            <Text style={mainStyles.skipText}>Skip</Text>
        </TouchableOpacity>  
    </View>
  );
}








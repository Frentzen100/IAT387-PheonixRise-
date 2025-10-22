import { StyleSheet } from 'react-native';

const onboardingStyles = StyleSheet.create({

   appTitle: {
    marginTop: 50,
    fontSize: 30,
    color: "#001B62",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },

  appSlogan: {
    fontSize: 20,
    color: "#001B62",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 30,
  },

  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0C1B4D",
    marginBottom: 6,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 30,
    paddingRight: 10,
  },

  passwordInput: {
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 12,
      paddingVertical: 10,
      paddingTop: 16,
      paddingBottom: 16,
      fontSize: 16,
      color: '#000', 
  },


  createAccountButton: {
    backgroundColor: "#0C1B4D",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  tutorialImage: {
    border: '100px solid #001B62',
    width: 350,
    marginBottom: 30,
    marginLeft: -30,
    marginTop: -200
  },

  tutorialSlide: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal : 25,
  },

  tutorialText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#001B62',
    lineHeight: 24,
    marginBottom: 30,
    marginLeft: -30,
    marginTop: 0,
    fontFamily: 'Poppins_400Regular',
    width: '90%',
    lineHeight: 30,
  },

  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'center',
     transform: [
      { translateY: -250 }, // Move 30 units upwards
    ],
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 100,
    backgroundColor: '#001B62',
    opacity: 0.5,
    marginHorizontal: 5,
  },

  activeDot: {
    opacity: 1,
  },
  
  nextButton: {
    backgroundColor: '#0C1B4D',
    paddingVertical: 14,
    paddingHorizontal: 100,
    borderRadius: 25,
    marginBottom: 10,
  },

  nextText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },

  skipText: {
    color: '#001B62',
    fontSize: 14,
    marginTop: 5,
  },
});

export default onboardingStyles;
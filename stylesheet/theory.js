import { StyleSheet } from 'react-native';

const theoryStyles = StyleSheet.create({

    scenarioImage:{
        alignSelf:'center',
        height: 130,
        marginBottom: 10,

    },

    gratitudeImage:{
        alignSelf:'center',
        height: 90,
        marginBottom: 10,

    },

    optionContainer:{
        marginTop: 8,
    },

    modalSheet: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        paddingBottom: 16,
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    modalHeading: {
        fontSize: 18,
        fontFamily: "Poppins_600SemiBold",
        color: "#1b1b1b",
        marginBottom: 8,
    },

    modalHeadline:{
        marginBottom: 16,
    },

    modalParagraph: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "Poppins_400Regular",
        color: "#2b2b2b",
        marginBottom: 100,
    },

    modalButton: {
        bottom: 25,
    },

    outsideInformationContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    informationContainer: {
        backgroundColor: 'F0F2FF',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        width: '80%'
    },

    informationText: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Poppins_500Medium',
    },

    gratitudeHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
    },

    gratitudeLabel:{
        marginTop: 20,
        marginBottom: 8,
    },

    congratulateImage:{
        width: 400,
        marginTop: -100,
    },

    congratulationHeading:{
        textAlign: 'center',
        marginTop: -125,
        color: '#001B62'
    },

    congratulationParagraph:{
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 28,
        color: '#001B62'
    },

     statRow:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 30
    },

    statBox:{
        alignItems: 'center',
        width: 110,
        textAlign: 'center'
    },

    statLabel:{
        textAlign: 'center', 
        color: '#001B62',
        marginTop: -10,
    },

    theoryHeaderRow:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 16,
    },

    progressWrap: {
        flex: 1
    },

    progressTrack: {
        height: 20,
        borderRadius: 99,
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        marginBottom: 15,
    },

    progressFill: {
        height: '100%',
        borderRadius: 99,
        backgroundColor: '#25CE58'
    },

    progressLabelContainer: {
        alignItems: 'flex-end',
        marginTop: -5,
    },

    progressLabel: {
        fontSize: 14,
        color: "#0C1B4D",
        fontFamily: "Poppins_500Medium",
        marginLeft: 12,
    
    },
  
    tryAgainContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 200,
        marginLeft: 50
    },

    tryAgainImage:{
        width: 300,
        height: 300
    }, 

    quoteContainer:{
        transform:[
            { translateY: -300 }
        ]
    },

    quoteText: {
        textAlign: "center",
        fontSize: 20,
        color: "#0C1B4D",
        fontFamily: "Poppins_500Medium",
        marginTop: 40,
        marginHorizontal: 30,
        lineHeight: 30,
    },

    quoteAuthor: {
        textAlign: "center",
        fontSize: 16,
        color: "#0C1B4D",
        fontFamily: "Poppins_400Regular",
        marginTop: 10,
    },



});

export default theoryStyles;
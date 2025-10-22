import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F2FF',
        paddingTop: 75,
        paddingLeft: 20,
        paddingRight: 20,
    },

     heading1: {
        fontSize: 30,
        fontFamily: 'Poppins_700Bold',
        marginBottom: 15,
    },

    heading2: {
        fontSize: 24,
        fontFamily: 'Poppins_600SemiBold',
        marginBottom: 15,
    },

    boldParagraph: {
        fontSize: 16,
        fontFamily: 'Poppins_600SemiBold',
    },

    paragraph: {
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 24,
    },

     captionText: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
    },

    buttonText: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        color: '#fff',
    },

    label: {
        fontSize: 14,
        fontWeight: "500",
        color: "#001B62",
        marginBottom: 6,
    },

    largeButton:{
        opacity: 1,
        width: '100%',
        backgroundColor: '#001B62',
        padding: 5,
        marginBottom: 10,
        position: 'absolute',
        bottom: 100,
        left: 20,
        borderRadius: 10,
    },

     largeButton2:{
        opacity: 1,
        width: '100%',
        backgroundColor: '#001B62',
        padding: 5,
        marginBottom: 10,
        position: 'absolute',
        bottom: 300,
        left: 20,
        borderRadius: 10,
    },

    largeButtonDisabled:{
        opacity: 0.5,
    },

    optionButton:{
        borderColor: '#001B62',
        borderWidth: 1,
        borderRadius: 10,
        padding: 16,
        marginTop: 8,
        marginBottom: 8,
    },

    selectedOptionButton:{
        backgroundColor: '#ffffff'
    },

    wrongOptionButton:{
        backgroundColor: '#FCE49C',
        borderColor: '#CFAC14'
    },

    correctOptionButton:{
        backgroundColor: '#D3F5DD',
        borderColor: '#0AB843'
    },
    
    optionText: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',

    },

    closeIcon: {
        fontSize: 28,
        color: "#000",
        marginBottom: 10
    },

    inputRow: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },

    input: {
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        paddingTop: 16,
        paddingBottom: 16,
        fontSize: 16,
        color: '#000', 
        marginBottom: 16,
    },

    inputEnabled: {
        borderWidth: 2, 
        borderColor: '#001B62',
        backgroundColor: '#F291AE'
    },


    addButton: {
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginTop: 16,
        marginBottom: 16,
    },

    addButtonText: {
        fontWeight: '700',
        textAlign: 'center',
    },

    disabledButton: {
        opacity: 0.5,
    },

    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 10,
        padding: 16,
        marginTop: 8,
        backgroundColor: '#F0F2FF',
    },

    itemText: {
        flex: 1,
        fontSize: 16,
        paddingTop: 2,
    },

    deleteButton: {
        color: 'red',
        marginLeft: 10,
    },

    skipButton: {
        position: 'absolute',
        bottom: 75,   
        right: '50%',
    },

     skipButton2: {
        position: 'absolute',
        bottom: 275,   
        right: '50%',
    },
    
});

export default mainStyles;
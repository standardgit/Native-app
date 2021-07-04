import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    logoWrapper: {
        width: '70%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#f75175',
        alignItems: 'center',
        fontSize: 40,
        fontWeight: '700',
    },
    newtext: {
        color: '#514f4f',
        fontWeight: 'bold',
        alignItems: 'center',
        alignSelf: 'center',
    },
    start: {
        height: '50%',
        justifyContent: 'flex-end',
        padding: 20,
        fontWeight: '900',
        fontSize: 40,
    },
    textWhite: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,  
    }
   
})
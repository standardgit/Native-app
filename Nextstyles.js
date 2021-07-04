import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    imageWrapper: {
        width: '70%',
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textWhite: {
        color:'#474244',
        fontWeight: 'bold',
        padding: 20,
        fontSize: 30,
    },
    username: {
        color: '#474244',
        fontWeight: '900',
        justifyContent: 'center',
        width: '80%',
        fontSize: 10,   
    },
    enter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,   
    },
    password: {
        marginTop: 10,
    },
    forget: {
        color: '#474244',
        fontWeight: '900',
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        fontSize: 10,
        marginBottom: 10,  
    },
    signWrapper: {
        color:'#474244',
        fontWeight: 'bold',
        padding: 20,
        fontSize: 30,
        backgroundColor: '#f75175',
        borderRadius: 100,
        borderBottomWidth: 1,
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    or: {
        marginTop: 20,
        height: 50,
        justifyContent: 'center',
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        width: 300,
        alignItems:'center',
        margin: 10,
        elevation: 20,
    },
    noAccount:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        justifyContent: 'flex-end',
    },
    create: {
        color: 'blue',
        fontWeight: "bold",
    }
})
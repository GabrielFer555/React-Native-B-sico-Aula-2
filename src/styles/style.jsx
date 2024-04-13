import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputArea: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    inputButton: {
        flex: 1,
        flexDirection: 'row',
        padding: 50
    },
    inputResult: {
        flex: 2
    },
    inputbox: {
        width: 300,
        height: 50,
        borderBottomWidth: 0.5
    },
    inputCombo: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    btnStandard: {
        width: 150,
        height: 50,
        textAlign: 'center',
        borderColor: '#000',
        borderWidth: 0.5,
        textTransform: 'uppercase',
        justifyContent: 'center',
        borderRadius: 10
    },
    btnSuccess: {
        backgroundColor: 'green',
        margin: 50
    },
    btnError: {
        backgroundColor: 'red',
        margin: 50
    },
    btnText: {
        color: '#fff',
        textAlign: "center"
    },
    labelTitle:{
        fontSize:24,
        textTransform:'uppercase'
    }


});


export default styles
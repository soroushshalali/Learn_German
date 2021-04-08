import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    btn: {
        backgroundColor: "rgb(100, 100, 255)",
        paddingHorizontal: 5,
        borderRadius: 30,
        marginVertical: 10,
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 50,
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        letterSpacing: 1,
        textAlign: 'center',
    },
    //LIST//////////////////////////
    Listbtn: {
        backgroundColor: "rgb(100, 100, 255)",
        paddingHorizontal: 5,
        borderRadius: 5,
        marginVertical: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 2,
    },
    ListBtnText: {
        color: '#fff',
        fontSize: 20,
        letterSpacing: 1
    },
    //SEARCH//////////////////////////
    searchContainer: {
        width: 280,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBox: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        flex: 10,
        height: '100%'
    },
    listBtnSearch: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        height: '100%',
        alignItems: 'center',
        paddingTop: '5%',
    },
    //HELP//////////////////////////
    helpContainer: {
        marginVertical: 5,
        width: 285,
        alignItems: 'flex-end',
    },
    helpBtn: {
        backgroundColor: '#aaa',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    helpText: {
        color: 'red',
        fontSize: 25,
        fontWeight: '900'
    },
    helpComponent: {
        left: '5%',
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'rgba(37, 37, 70, 0.808)',
        padding: 5,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 50,
    },
    //Beispiel///////////////
    BeispielContainer: {
        flex: 1,
        backgroundColor: '#eee',
        padding: 6
    },
    BeispielBtn: {
        backgroundColor: "rgb(100, 100, 100)",
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    BeispielBtnText: {
        color: '#fff',
        fontSize: 20,
        letterSpacing: 1,
        textAlign: 'center'
    },
    einleitung: {
        marginVertical: 10,
        fontWeight: 'bold'
    },
    BeispielContent: {
        padding: 5,
        backgroundColor: '#ddd',
        borderRadius: 5
    },
    BeispielMainText: {
        lineHeight: 25,
        paddingVertical: 10
    },
    //TEST//////////////////////////////////////
    Testquestion: {
        backgroundColor: "rgb(255,255,255)",
        paddingHorizontal: 5,
        width: 285,
        height: 70,
        borderRadius: 5,
        marginVertical: 10,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 2,
    },
    TestquestionText: {
        color: '#444',
        fontSize: 20,
        letterSpacing: 1,
        textAlign: 'left'
    },
    content: {
        padding: 5,
        backgroundColor: '#ddd',
        borderRadius: 5
    },
    mainText: {
        lineHeight: 25
    },
    //COntact////////////////////////7
    ContactBtn: {
        backgroundColor: "rgb(100, 100, 100)",
        paddingHorizontal: 5,
        borderRadius: 30,
        marginVertical: 10,
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 50,
    },
    ContactBtnText: {
        color: '#fff',
        fontSize: 20,
        letterSpacing: 1
    },

    //SHOW_RESULT////////////////////////
    ShowResultbtn: {
        backgroundColor: "green",
        paddingHorizontal: 5,
        borderRadius: 30,
        marginVertical: 10,
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 5,
    },
    ShowResultbtnText: {
        color: '#fff',
        fontSize: 17,
        letterSpacing: 1,
        textAlign: 'center',
    },
    //LITNER BOX/////////////////////////////////////
    litnerBoxContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    crudBtn_Container: {
        flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    crudBtn: {
        backgroundColor: "rgb(100, 100, 255)",
        paddingHorizontal: 5,
        borderRadius: 5,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 2,
    },
    addBtn_text: {
        fontSize: 40,
    },
    list_text_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },

    //ADD_Word///////////////////////////
    container_addWord: {
        paddingHorizontal: 20
    },
    word_input: {
        backgroundColor: '#fff',
        marginVertical: 5,
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    //Litner_test
    LitnerTest_btn: {
        marginHorizontal: 1,
        width: '50%',
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    
});

export { styles };
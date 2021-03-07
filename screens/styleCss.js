import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
    },
    btn: {
        backgroundColor: "rgb(100, 100, 255)",
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
    btnText: {
        color: '#fff',
        fontSize: 20,
        letterSpacing: 1,
        textAlign: 'center',
    },
    //List///////////////////////////////////////////////////////////////
    ListContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        position: 'relative'
    },
    Listbtn: {
        backgroundColor: "rgb(100, 100, 255)",
        paddingHorizontal: 5,
        borderRadius: 5,
        marginVertical: 10,
        width: 285,
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 10
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
    //Beispiel///////////////
    BeispielContainer: {
        flex: 1,
        backgroundColor: '#eee',
        padding: 6
    },
    BeispielBtn: {
        backgroundColor: "rgb(100, 100, 255)",
        paddingHorizontal: 5,
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
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
    BeispielBtnText: {
        color: '#fff',
        fontSize: 15,
        letterSpacing: 1
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
        lineHeight: 25
    },
    //TEST//////////////////////////////////////
    Testcontainer: {
        flex: 1,
        backgroundColor: '#eee',
        padding: 6,
        alignItems: 'center'
    },
    Testbtn: {
        backgroundColor: "rgb(100, 100, 255)",
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
    TestbtnText: {
        color: '#fff',
        fontSize: 17,
        letterSpacing: 1,
        textAlign: 'center',
    },
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
    einleitung: {
        marginVertical: 10,
        fontWeight: 'bold'
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
    ContactContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eee',
    },
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
    //SHOW_RESULT////////////////////////
    ShowResultcontainer: {
        flex: 1,
        backgroundColor: '#eee',
        padding: 6,
        alignItems: 'center',
    },
    ShowResult: {
        backgroundColor: "rgb(255,255,255)",
        paddingHorizontal: 5,
        width: 285,
        alignItems: 'center',
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
    ShowResultText: {
        color: '#444',
        fontSize: 30,
        letterSpacing: 1,
    },
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
    LitnerContainer: {

    },
    addBtn_Container: {
        paddingHorizontal: 20,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    addBtn: {
        marginTop: -10
    },
    addBtn_text: {
        fontSize: 40,
    },
    list_text_container: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%'
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
    LitnerTest_btn:{
        marginHorizontal:1,
        width:'50%',
        alignItems:'center',
        height:40,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    }
});

export { styles };
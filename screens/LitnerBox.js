import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Modal, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { LitnerController } from './LitnerController';
import { styles } from './styleCss';

const LitnerBox = (props) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [warning, setWarning] = useState(false);
    const [textForModal, setTextForModal] = useState('');

    const delAll = () => {
        let realm = new LitnerController();
        realm.del_all();
    }
    return (
        <View style={styles.litnerBoxContainer} >
            <View
                style={styles.crudBtn_Container}>
                <Pressable
                    style={[styles.crudBtn, { width: 50, height: 20, backgroundColor: 'yellow' }]}
                    onPress={() => props.navigation.navigate('AddWord', { edit: false })}
                >
                    <Text style={[styles.ListBtnText, { color: 'black' }]} >+</Text>
                </Pressable>
            </View>

            <View style={{ alignItems: 'center' }} >
                <Pressable
                    style={styles.btn}
                    onPress={() => {
                        let realm = new LitnerController();
                        if (realm.show_records().length > 0) {
                            props.navigation.navigate('Words')
                        } else {
                            setTextForModal('Du hast noch kein Wort eingefügt.');
                            setModalVisible(!modalVisible)
                        }
                    }}
                >
                    <Text style={styles.btnText} >Alle Wörter</Text>
                </Pressable>

                <Pressable
                    style={styles.btn}
                    onPress={() => {
                        let controller = new LitnerController();
                        controller.status = -1;
                        if (controller.show_records().length > 0) {
                            return (props.navigation.navigate('Litner Test'))
                        }
                        setModalVisible(!modalVisible);
                        setTextForModal('Bis jetzt gibt es kein Wort zum Wiederholen.');
                    }}
                >
                    <Text style={styles.btnText} >Die heutigen Wörter</Text>
                </Pressable>

                <Pressable
                    style={styles.btn}
                    onPress={() => {
                        let realm = new LitnerController();
                        if (realm.show_records().length > 0) {
                            setWarning(!warning)
                        } else {
                            setTextForModal('Du hast noch kein Wort eingefügt.');
                            setModalVisible(!modalVisible)
                        }
                    }}
                >
                    <Text style={styles.btnText} >Dell Wörter</Text>
                </Pressable>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onShow={() => {
                    setTimeout(() => {
                        setModalVisible(!modalVisible)
                    }, 2000);
                }}
            >
                <View style={stylesIn.centeredView}>
                    <View style={stylesIn.modalView}>
                        <Text style={stylesIn.modalText}>{textForModal}</Text>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="fade"
                transparent={true}
                visible={warning}
            >
                <View style={stylesIn.centeredView}>
                    <View style={stylesIn.modalView}>
                        <Text style={stylesIn.modalText}>Sicher,dass alle Wörter gelöcht werden muss?</Text>
                        <Pressable
                            style={[stylesIn.button, stylesIn.buttonClose]}
                            onPress={() => setWarning(!warning)}
                        >
                            <Text style={stylesIn.textStyle}>Nein</Text>
                        </Pressable>
                        <Pressable
                            style={[stylesIn.button, stylesIn.buttonOpen]}
                            onPress={() => {
                                delAll();
                                setWarning(!warning)
                            }}
                        >
                            <Text style={stylesIn.textStyle}>Ja</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}


export { LitnerBox };

const stylesIn = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "red",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
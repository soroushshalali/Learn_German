import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import data from './data.json';

const List = (props) => {
    const [params, setParams] = useState(props.route.params);
    const [praepositionen, setPraepositionen] = useState(data.praepositionen);
    const [help, setHelp] = useState(props.route.params.help);
    const [helpComponent, sethelpComponent] = useState(false);
    const helpHandler = (flag) => {
        if (flag) {
            return (
                <View style={styles.helpContainer}
                >
                    <Pressable
                        onPress={() => sethelpComponent(!helpComponent)}
                        style={styles.helpBtn}
                    >
                        <Text style={styles.helpText} >&#9783;</Text>
                    </Pressable>
                </View>
            );
        }
    }

    function listSelect(list, item) {
        if (list == 'AdjMitPro' || list == 'verbMitPro') {
            return (
                <Text style={styles.btnText} >{item.title}{praepositionen[Number(item.answer)].title}</Text>
            );
        } else if (list == 'NomVerbVerbin' || list == 'Brief' || list == 'Test') {
            return (
                <Text style={styles.btnText} >{item.title}{item.answer}</Text>
            );
        }
    }
    return (
        <View style={styles.container} >
            {helpHandler(help)}
            <View style={[styles.helpComponent, { top: helpComponent ? '1.5%' : '100%' }]} >
                <Text style={{ color: '#fff' }} >
                    etw = Sache + Akkusativ{'\n'}
                    jdn = Person + Akkusativ{'\n'}
                    s. = Reflexivpronomen + Akkusativ{'\n'}
                    jdm = Person + Dativ{'\n'}
                    s. = Reflexivpronomen + Dativ{'\n'}
                </Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={props.route.params.data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <Pressable style={styles.btn}
                            onPress={() => {
                                if (params.flag == 'Test') {
                                    props.navigation.navigate('Test', { testId: item.id })
                                } else {
                                    props.navigation.navigate('Beispiel', { flag: params.flag, flagData: params.data[item.id] })
                                }
                            }}
                        >
                            <View>
                                {listSelect(props.route.params.flag, item)}
                            </View>
                        </Pressable>
                    );
                }}
            />
        </View>
    );
}

export { List };
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        position: 'relative'
    },
    btn: {
        backgroundColor: "rgb(100, 100, 255)",
        paddingHorizontal: 5,
        borderRadius: 5,
        marginVertical: 10,
        width: 285,
        height: 70,
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
    btnText: {
        color: '#fff',
        fontSize: 20,
        letterSpacing: 1
    },
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
        left: '10%',
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
    }
});
import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import data from './data.json'

const ShowResult = (props) => {
    const dataSelect = (id) => {
        if (id == 0) {
            return data.NomVerbVerbin;
        } else if (id == 1) {
            return data.AdjMitPro;
        } else if (id == 2) {
            return data.verbMitPro;
        }
    }

    const [dataTest, setDataTest] = useState(dataSelect(props.route.params.testId));
    console.log('dalse answers' + props.falseAnswers)
    return (
        <View style={styles.container} >
            <View style={styles.result} >
                <Text style={styles.resultText} >{props.correctCounter} / 10</Text>
            </View>
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={props.falseAnswers}
                    keyExtractor={item => item.toString()}
                    renderItem={({ item }) => {
                        return (
                            <Pressable style={styles.btn}
                                onPress={() => props.navigation.navigate('Beispiel', { flagData: dataTest[item] })}
                            >
                                <View>
                                    <Text style={styles.btnText} >{dataTest[item].title}</Text>
                                </View>
                            </Pressable>
                        );
                    }}
                />
            </View>
        </View>
    );
}

export { ShowResult };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        padding: 6,
        alignItems: 'center',
    },
    result: {
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
    resultText: {
        color: '#444',
        fontSize: 30,
        letterSpacing: 1,
    },
    btn: {
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
    btnText: {
        color: '#fff',
        fontSize: 17,
        letterSpacing: 1,
        textAlign: 'center',
    }
});
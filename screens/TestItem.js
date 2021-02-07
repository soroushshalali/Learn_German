import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import data from './data.json';


const TestItem = (props) => {
    const dataSelect = (id) => {
        if (id == 0) {
            return data.NomVerbVerbin;
        } else if (id == 1) {
            return data.AdjMitPro;
        }
    }

    const randomNumber = (length) => {
        return Math.floor(Math.random() * length) + 1;
    }

    const shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    const [dataTest, setDataTest] = useState(dataSelect(1));
    const [questionNumber, setQuestionNumber] = useState(Math.floor(Math.random() * 35) + 1);
    const [options, setOptions] = useState([
        questionNumber,
        Math.floor(Math.random() * 35) + 1,
        Math.floor(Math.random() * 35) + 1,
    ]);
    return (
        <View style={styles.container} >

            <View style={styles.question} >
                <Text style={styles.questionText}>{questionNumber}</Text>
            </View>
            <View>
                <Pressable style={styles.btn}
                >
                    <View>
                        <Text style={styles.btnText} >{options[0]}</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.btn}
                >
                    <View>
                        <Text style={styles.btnText} >{options[1]}</Text>
                    </View>
                </Pressable>
                <Pressable style={styles.btn}
                >
                    <View>
                        <Text style={styles.btnText} >{options[2]}</Text>
                    </View>
                </Pressable>
            </View>

        </View>
    );
}

export { TestItem };
const styles = StyleSheet.create({
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
        fontSize: 17,
        letterSpacing: 1,
        textAlign: 'center',
    },
});
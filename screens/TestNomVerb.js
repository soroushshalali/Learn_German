import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import data from './data.json';

const TestNomVerv = (props) => {

    const dataSelect = (id) => {
        if (id == 0) {
            return data.NomVerbVerbin;
        } else if (id == 1) {
            return data.AdjMitPro;
        } else if (id == 2) {
            return data.verbMitPro;
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

    const generateNumbers = (len, num) => {
        let numbers = [];
        for (let i = 0; i <= num - 1; i++) {
            numbers[i] = randomNumber(len);
        }
        return numbers;
    }

    function generateOptions() {
        let options = [];
        for (let i = 0; i <= 9; i++) {
            options[i] = shuffle([
                Number(dataTest[questionNumbers[i]].id),
                randomNumber(data.NomVerbVerbin.length - 1),
                randomNumber(data.NomVerbVerbin.length - 1),
            ])
        }
        return options;
    }

    const [dataTest, setDataTest] = useState(dataSelect(props.route.params.testId));
    const [counter, setCounter] = useState(1);
    const [questionNumbers, setQuestionNumber] = useState(generateNumbers(dataTest.length - 1, 10));
    const [options, setOptions] = useState(generateOptions());
    const [background, setBackground] = useState([]);
    const [selected, setSelected] = useState(false);
    const [correctCounter, setCorrectCounter] = useState(0);

    console.log(questionNumbers);
    console.log(options);

    function Check(ansNum) {
        let backColor = [];
        if (!selected) {
            if (dataTest[options[counter - 1][ansNum]].id == dataTest[questionNumbers[counter - 1]].id) {
                backColor[ansNum] = { backgroundColor: 'green' }
                setCorrectCounter(correctCounter + 1);
            } else {
                backColor[ansNum] = { backgroundColor: 'red' };
                for (let i = 0; i <= 2; i++) {
                    if (dataTest[options[counter - 1][i]].id == dataTest[questionNumbers[counter - 1]].id) {
                        backColor[i] = { backgroundColor: 'green' }
                    }
                }
            }
            setBackground(backColor);
            setSelected(true);
        }
    }

    if (counter <= 10) {
        return (
            <View style={styles.container} >
                <View style={styles.question} >
                    <Text style={styles.questionText}>{counter}-({dataTest[questionNumbers[counter - 1]].title}) bedeutet:</Text>
                </View>
                <View>
                    <Pressable style={[styles.btn, background[0]]}
                        onPress={() => Check(0)}
                    >
                        <View>
                            <Text style={styles.btnText} >{dataTest[options[counter - 1][0]].answer}</Text>
                        </View>
                    </Pressable>
                    <Pressable style={[styles.btn, background[1]]}
                        onPress={() => Check(1)}
                    >
                        <View>
                            <Text style={styles.btnText} >{dataTest[options[counter - 1][1]].answer}</Text>
                        </View>
                    </Pressable>
                    <Pressable style={[styles.btn, background[2]]}
                        onPress={() => Check(2)}
                    >
                        <View>
                            <Text style={styles.btnText} >{dataTest[options[counter - 1][2]].answer}</Text>
                        </View>
                    </Pressable>
                </View>
                <Pressable style={[styles.btn, {
                    backgroundColor: 'rgba(55, 55, 65, 0.808)'
                }]}
                    onPress={() => {
                        if (selected) {
                            setCounter(counter + 1)
                            setBackground([]);
                            setSelected(false);
                        }
                    }}
                >
                    <View>
                        <Text style={styles.btnText} >Next</Text>
                    </View>
                </Pressable>
            </View>
        );
    } else {
        return (
            <View>
                <Text>{correctCounter}/10</Text>
            </View>
        );
    }

}

export { TestNomVerv };
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        padding: 6,
        alignItems: 'center'
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
        fontSize: 17,
        letterSpacing: 1,
        textAlign: 'center',
    },
    question: {
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
    questionText: {
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
    }
});
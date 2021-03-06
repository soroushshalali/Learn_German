// import RNPickerSelect from 'react-native-picker-select';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import data from './data.json';
import { ShowResult } from './ShowResult';
import {styles} from './styleCss'

const ErgänzungTest = (props) => {

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

    const checkNumber = (array, num) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == num) {
                return false;
            }
        }
        return true;
    }

    const randomNumber = (max, length) => {
        let arrNumbers = [];
        let number = [];
        for (let i = 0; i <= length - 1; i++) {
            for (let j = 0; j < 1; j--) {
                number = Math.floor(Math.random() * max - 1) + 1;
                if (checkNumber(arrNumbers, number)) {
                    arrNumbers.push(number);
                    break;
                }
            }
        }
        return arrNumbers;
    }

    const itemsPicker = (len) => {

        let sentenceArr = [];
        let randomNumbers = randomNumber(ergänzungenData.length, len);
        for (let i = 0; i < randomNumbers.length; i++) {
            sentenceArr.push(ergänzungenData[randomNumbers[i]]);
        }
        return sentenceArr;
    }

    const sentenceMaker = (array) => {
        let sentences = [];
        for (const x of array) {
            sentences.push({
                id: x.id,
                sentence: spliter(x)
            });
        }
        return sentences;
    }

    const answersMaker = (array) => {
        let items = [];
        for (const x of array) {
            items.push(wordPicker(x));
        }
        return items;
    }

    const optionsMaker = (array) => {
        let randOpt = [];
        let randomItems;
        for (const x of array) {
            randomItems = itemsPicker(2);
            randOpt.push(shuffle([x, wordPicker(randomItems[0]), wordPicker(randomItems[1])]));
        }
        return randOpt;
    }

    const spliter = (param) => {
        let splitSatz = param.sentence.split(' ');
        splitSatz[param.answer] = '.....';
        splitSatz = splitSatz.join(' ');
        return splitSatz;
    }
    const wordPicker = (param) => {
        let splitSatz = param.sentence.split(' ');
        return splitSatz[param.answer];
    }

    const [ergänzungenData, setErgänzungenData] = useState(data.ergänzung);
    const [itemsTest, setItemsTest] = useState(itemsPicker(10));
    const [sentences, setSentences] = useState(sentenceMaker(itemsTest))
    const [answers, setAnswers] = useState(answersMaker(itemsTest));
    const [options, setOptions] = useState(optionsMaker(answers));
    const [counter, setCounter] = useState(0);
    const [answerd, setAnswerd] = useState(false);
    const [background, setBackground] = useState([]);
    const [correctCounter, setCorrectCounter] = useState(0);


    function Check(ansNum) {
        let backColor = [];
        if (!answerd) {
            if (answers[counter] == options[counter][ansNum]) {
                backColor[ansNum] = { backgroundColor: 'green' }
                setCorrectCounter(correctCounter + 1);
            } else {
                backColor[ansNum] = { backgroundColor: 'red' };
            }
            setBackground(backColor);
            setAnswerd(true);
        }
    }
    if (counter <= 9) {
        return (
            <View style={styles.Testcontainer} >
                <View style={styles.Testquestion} >
                    <Text style={styles.TestquestionText}>{counter + 1}- {sentences[counter].sentence}</Text>
                </View>
                <View>
                    <Pressable style={[styles.Testbtn, background[0]]}
                        onPress={() => Check(0)}
                    >
                        <View>
                            <Text style={styles.TestbtnText} >{options[counter][0]}</Text>
                        </View>
                    </Pressable>
                    <Pressable style={[styles.Testbtn, background[1]]}
                        onPress={() => Check(1)}
                    >
                        <View>
                            <Text style={styles.TestbtnText} >{options[counter][1]}</Text>
                        </View>
                    </Pressable>
                    <Pressable style={[styles.Testbtn, background[2]]}
                        onPress={() => Check(2)}
                    >
                        <View>
                            <Text style={styles.TestbtnText} >{options[counter][2]}</Text>
                        </View>
                    </Pressable>
                </View>
                <Pressable style={[styles.Testbtn, {
                    backgroundColor: 'rgba(55, 55, 65, 0.808)'
                }]}
                    onPress={() => {
                        if (answerd) {
                            setCounter(counter + 1)
                            setBackground([]);
                            setAnswerd(false);
                        }
                    }}
                >
                    <View>
                        <Text style={styles.TestbtnText} >Next</Text>
                    </View>
                </Pressable>
            </View>
        );
    } else {
        return (
            <ShowResult {...props} correctCounter={correctCounter} falseAnswers={false} />
        );
    }
}

export { ErgänzungTest };
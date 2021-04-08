import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styleCss'
import { LitnerController } from './LitnerController'

const LitnerTest = (props) => {
    const getWords = () => {
        let realm = new LitnerController();
        realm.status = -1;
        let result = [];
        for (const x of realm.show_records()) {
            let obj = {
                id: x.id,
                word: x.word,
                meaning: x.meaning,
                more: x.more,
            }
            result.push(obj);
        }
        return result;
    }
    const [words, setWords] = useState(getWords());
    const [counter, setCounter] = useState(0);
    const checkAnswer = (answer) => {
        changeStatus(answer);
        counter >= words.length - 1 ? props.navigation.navigate('LitnerBox') : setCounter(counter + 1);
    }
    const changeStatus = (answer) => {
        let realm = new LitnerController();
        realm.userFlag = answer;
        realm.id = words[counter].id;
        realm.change_status();
    }

    return (
        <View style={[styles.container, { justifyContent: 'space-evenly' }]} >
            <View style={[styles.Testquestion, { alignItems: 'center' }]} >
                <Text style={styles.TestquestionText}>{words[counter].word}</Text>
            </View>
            <View
                style={{ flexDirection: 'row' }}
            >
                <Pressable
                    onPress={() => checkAnswer(true)}
                    style={[styles.LitnerTest_btn, { backgroundColor: 'blue', }]}
                >
                    <Text style={{ color: '#fff' }} >Ich weiß es</Text>
                </Pressable>
                <Pressable
                    onPress={() => checkAnswer(false)}
                    style={[styles.LitnerTest_btn, { backgroundColor: 'red', }]}

                >
                    <Text style={{ color: '#fff' }} >Ich weiß es NICHT</Text>
                </Pressable>
            </View>
        </View>
    );

}


export { LitnerTest };
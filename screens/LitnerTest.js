import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styleCss'
import { LitnerController } from './LitnerController'

const LitnerTest = (props) => {

    const get_words = () => {
        let controller = new LitnerController();
        controller.status = -1;
        return controller.show_records();
    }
    const [counter, setCounter] = useState(0);
    const [words, setWords] = useState(get_words());
    // for (const x of words) {
    //     console.log(x.word)
    // }

    console.log(words);

    const check = (ans) => {
        let controller = new LitnerController();
        if (ans) {
            controller.userFlag = true;
        } else {
            controller.userFlag = false;
        }

        controller.id = words[counter].id;
        // controller.change_status();

        if (counter < words.length - 1) {
            setCounter(counter + 1);
        } else {
            props.navigation.navigate('LitnerBox')
        }
    }


    if (words.length > 0) {
        return (
            <View style={{ alignItems: 'center' }} >
                <View style={[styles.Testquestion, { alignItems: 'center' }]} >
                    <Text style={styles.TestquestionText}>{words[counter].word}</Text>
                </View>
                <View
                    style={{ flexDirection: 'row' }}
                >
                    <Pressable
                        onPress={() => check(1)}
                        style={[styles.LitnerTest_btn, { backgroundColor: 'blue', }]}
                    >
                        <Text style={{ color: '#fff' }} >Ich weiß es</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => check(0)}
                        style={[styles.LitnerTest_btn, { backgroundColor: 'red', }]}

                    >
                        <Text style={{ color: '#fff' }} >Ich weiß es NICHT</Text>
                    </Pressable>
                </View>
            </View>
        );
    } else {
        return (
            <View>
                <Text>ES gibt keines Wort</Text>
            </View>
        );

    }
}


export { LitnerTest };
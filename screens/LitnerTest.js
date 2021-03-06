import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styleCss'
import { ClassRealm } from './ClassRealm'


const LitnerTest = (props) => {

    const getData = () => {
        let realm = new ClassRealm()
        realm.status = 0;
        let result = realm.show_records();
        console.log(Date.now());
        console.log(result);
        return result;
    }
    const [words, setWords] = useState(getData());
    const [counter, setCounter] = useState(0);

    function check(ans) {
        let realm = new ClassRealm()

        if (ans) {
            realm.id = words[counter].id;
            realm.update();
        }

        if (counter <= words.length - 2) {
            setCounter(counter + 1);
        } else {
            props.navigation.navigate('LitnerBox');
        }
    }

    if (words.length > 0) {
        return (
            <View style={styles.container} >
                <View style={styles.Testquestion} >
                    <Text style={styles.TestquestionText}>{words[counter].word}</Text>
                </View>
                <View
                    style={{ flexDirection: 'row' }}
                >
                    <Pressable
                        onPress={() => check(1)}
                        style={{ backgroundColor: 'blue', paddingHorizontal: 10, width: 150 }}
                    >
                        <Text>Ich weiß es</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => check(0)}
                        style={{ backgroundColor: 'red', paddingHorizontal: 10, width: 150 }}

                    >
                        <Text>Ich weiß es NICHT</Text>
                    </Pressable>
                </View>
            </View>
        );
    } else {
        return (
            <View>
                <Text>test</Text>
            </View>
        );

    }
}


export { LitnerTest };
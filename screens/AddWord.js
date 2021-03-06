import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native'
import { ClassRealm } from './ClassRealm'
import { styles } from './styleCss'
const AddWord = () => {
    const [word, setWord] = useState('');
    const [meaning, setMeaning] = useState('');
    const [more, setMore] = useState('');
    const [fokus, setFokus] = useState(true);

    const addWord = () => {
        let realm = new ClassRealm();
        realm.word = 'word';
        realm.meaning = 'meaning';
        realm.more = 'more';
        realm.status = 1;
        if (realm.add_word()) {
            Alert.alert("Added Successfully.")
            setWord(null);
            setMeaning(null);
            setMore(null);
        } else {
            Alert.alert("Added not Successfully.")
        }
    }

    return (
        <View style={styles.container_addWord} >
            <TextInput
                autoFocus={fokus}
                placeholder='ٌWort'
                onChangeText={text => setWord(text)}
                value={word}
                style={styles.word_input}
            />

            <TextInput
                placeholder='bedeutung'
                onChangeText={text => setMeaning(text)}
                value={meaning}
                style={styles.word_input}
            />

            <TextInput
                placeholder='Mehr'
                onChangeText={text => setMore(text)}
                value={more}
                style={styles.word_input}
                multiline={true}
                numberOfLines={3}
            />

            <Button
                onPress={() => addWord()}
                title="einfügen"
            />
        </View>
    );
}

export { AddWord };
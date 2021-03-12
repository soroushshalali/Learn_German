import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native'
import { LitnerController } from './LitnerController'
import { styles } from './styleCss'
const AddWord = (props) => {
    const [word, setWord] = useState('');
    const [meaning, setMeaning] = useState('');
    const [more, setMore] = useState('');
    const [fokus, setFokus] = useState(true);

    const editHandler = (flag) => {
        if (flag) {
            let realm = new LitnerController();
            realm.id = props.route.params.id;
            let obj = realm.show_records();
            console.log(obj)
            setWord(obj.word);
            setMeaning(obj.meaning)
            setMore(obj.more)
        }
    }

    useEffect(() => {
        editHandler(props.route.params.edit)
    }, [])

    const addWord = () => {
        let realm = new LitnerController();
        realm.word = word;
        realm.meaning = meaning;
        realm.more = more;
        realm.status = 1;
        if (realm.add_word()) {
            // Alert.alert("Added Successfully.")
            setWord('');
            setMeaning('');
            setMore('');
        } else {
            Alert.alert("Added not Successfully.")
        }
    }

    const update = () => {
        let realm = new LitnerController();
        realm.word = word;
        realm.meaning = meaning;
        realm.more = more;
        realm.id = props.route.params.id;
        if (realm.update()) {
            console.log('UP')
            setWord('');
            setMeaning('');
            setMore('');
            props.navigation.navigate('Word', { id: props.route.params.id })
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
                onPress={() => { (props.route.params.edit) ? update() : addWord() }}
                title="einfügen"
            />
        </View>
    );
}

export { AddWord };
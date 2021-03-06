import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Alert, Pressable, Button, FlatList } from 'react-native';
import { ClassRealm } from './ClassRealm'
import { styles } from './styleCss';

const Word = (props) => {


    const del = () => {
        let realm = new ClassRealm();
        realm.id = props.route.params.id;
        realm.del();
        props.navigation.navigate('Words');
    }

    const findObj = (id) => {
        let realm = new ClassRealm();
        realm.id = id;
        let obj = realm.find_obj();
        return obj;
    }

    const update = () => {
        let realm = new ClassRealm();
        realm.update();
        show();
    }

    const [word, setWord] = useState(findObj(props.route.params.id));
    console.log(word);


    return (
        <View>


            <View
                style={styles.addBtn_Container}
            >
                <Pressable
                    style={styles.addBtn}
                    onPress={() => del()}
                >
                    <Text style={styles.addBtn_text} >-</Text>
                </Pressable>
                {/* <Pressable
                    style={styles.addBtn}
                    onPress={() => update()}
                >
                    <Text style={styles.addBtn_text} >UPDATE</Text>
                </Pressable> */}
            </View>
            <FlatList
                data={word}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{ borderWidth: 2 }}
                        >
                            <Text>{item.word}</Text>
                            <Text>{item.meaning}</Text>
                        </View>
                    );
                }}
                keyExtractor={item => item.id + ''}
            />

        </View>
    );
}


export { Word };
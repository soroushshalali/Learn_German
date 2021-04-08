import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { LitnerController } from './LitnerController'
import { styles } from './styleCss';

const Word = (props) => {

    const del = () => {
        let realm = new LitnerController();
        realm.id = props.route.params.id;
        realm.del();
        props.navigation.navigate('Words');
    }

    const get_word = (id) => {
        let realm = new LitnerController();
        realm.id = id;
        let obj = realm.show_records();
        return obj;
    }

    const [word, setWord] = useState(get_word(props.route.params.id));

    return (
        <View style={styles.litnerBoxContainer} >
            <View style={styles.crudBtn_Container}>
                <Pressable
                    style={[styles.crudBtn, { width: 60, height: 20, backgroundColor: 'yellow' }]}
                    onPress={() => props.navigation.navigate('AddWord', {
                        edit: true,
                        id: word.id
                    })}
                >
                    <Text style={[styles.ListBtnText, { color: 'black' }]} >Edit</Text>
                </Pressable>
                <Pressable
                    style={[styles.crudBtn, { width: 60, height: 20, backgroundColor: 'red',marginLeft:10 }]}
                    onPress={() => del()}
                >
                    <Text style={[styles.ListBtnText, { color: 'black' }]} >Del</Text>
                </Pressable>
            </View>
            <View style={styles.BeispielBtn} >
                <Text style={styles.BeispielBtnText} >{word.word}</Text>
            </View>
            <View style={styles.content} >
                <Text style={[styles.BeispielMainText,{textAlign:'center'}]} >{word.meaning}</Text>
            </View>
            <View>
                <Text style={[styles.BeispielMainText,{paddingHorizontal:10}]} >Mehr:{"\n"}{word.more}</Text>
            </View>
        </View>
    );
}


export { Word };
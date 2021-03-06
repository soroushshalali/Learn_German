import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Alert, Pressable, Button, FlatList, SafeAreaView } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { ClassRealm } from './ClassRealm';
import { styles } from './styleCss';

const LitnerBox = (props) => {

    const [json, setjson] = useState('');

    const show = () => {
        let realm = new ClassRealm();
        realm.status = 0;
        let result = realm.show_records();
        setjson(result);
    }

    const delAll = () => {
        let realm = new ClassRealm();
        realm.del_all();
        show();
    }

    useEffect(() => {
        show();
    }, [])


    return (
        <SafeAreaView style={styles.Litner_Container} >
            <View
                style={styles.addBtn_Container}>
                <Pressable
                    style={[styles.Listbtn,{width:50 , height:20 , backgroundColor:'yellow'}]}
                    onPress={() => props.navigation.navigate('AddWord')}
                >
                    <Text style={[styles.ListBtnText,{color:'black'}]} >+</Text>
                </Pressable>
            </View>


             <View style={{ alignItems: 'center' }} >
             <Pressable
                    style={styles.btn}
                    onPress={() => props.navigation.navigate('Words')}
                >
                    <Text style={styles.btnText} >Words</Text>
                </Pressable>
             <Pressable
                    style={styles.btn}
                    onPress={() => props.navigation.navigate('Litner Test')}
                >
                    <Text style={styles.btnText} >Heutihe Wörter</Text>
                </Pressable>
             <Pressable
                    style={styles.btn}
                    onPress={() => delAll()}
                >
                    <Text style={styles.btnText} >Dell Wörter</Text>
                </Pressable>


                {/* <FlatList
                    data={json}
                    renderItem={({ item }) => {
                        return (
                            <Pressable
                                style={[styles.Listbtn, { overflow: 'hidden' }]}
                                onPress={() => props.navigation.navigate('Word', {
                                    id: item.id
                                })}
                            >
                                <View style={styles.list_text_container} >
                                    <Text style={styles.ListBtnText} >{item.word}</Text>
                                    <Text style={styles.ListBtnText} >{item.meaning}</Text>
                                </View>
                            </Pressable>
                        );
                    }}
                    keyExtractor={item => item.id + ''}
                /> */}
            </View> 
        </SafeAreaView>
    );
}


export { LitnerBox };
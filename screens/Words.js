import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, FlatList, SafeAreaView } from 'react-native';
import { ClassRealm } from './ClassRealm';
import { styles } from './styleCss';

const Words = (props) => {

    const [json, setjson] = useState('');

    const show = () => {
        let realm = new ClassRealm();
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
                style={styles.addBtn_Container}
            >
                <Pressable
                    style={styles.addBtn}
                    onPress={() => props.navigation.navigate('AddWord')}
                >
                    <Text style={styles.addBtn_text} >+</Text>
                </Pressable>
                <Pressable
                    style={styles.addBtn}
                    onPress={() => delAll()}
                >
                    <Text style={styles.addBtn_text} >--</Text>
                </Pressable>
            </View>
            <View style={{ alignItems: 'center' }} >
                <FlatList
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
                                    <Text style={styles.ListBtnText} >{item.status}</Text>
                                    <Text style={styles.ListBtnText} >{item.timestamp}</Text>
                                </View>
                            </Pressable>
                        );
                    }}
                    keyExtractor={item => item.id + ''}
                />
            </View>
        </SafeAreaView>
    );
}


export { Words };
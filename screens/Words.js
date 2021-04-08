import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, FlatList, SafeAreaView } from 'react-native';
import { LitnerController } from './LitnerController';
import { styles } from './styleCss';

const Words = (props) => {

    const [json, setjson] = useState('');

    const show = () => {
        let realm = new LitnerController();
        let result = realm.show_records();
        console.log(result);
        setjson(result);
    }

    useEffect(() => {
        show();
    }, [])


    return (
        <SafeAreaView>
            {/* <View
                style={styles.addBtn_Container}>
                <Pressable
                    style={[styles.Listbtn,{width:50 , height:20 , backgroundColor:'yellow'}]}
                    onPress={() => props.navigation.navigate('AddWord',{edit:false})}
                >
                    <Text style={[styles.ListBtnText,{color:'black'}]} >+</Text>
                </Pressable>
            </View> */}
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
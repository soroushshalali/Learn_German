import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import data from './data.json';
import { Help } from './Help';
import { styles } from './styleCss';

const List = (props) => {
    const [params, setParams] = useState(props.route.params);
    const [dataList, setDataList] = useState(params.data);
    const [praepositionen, setPraepositionen] = useState(data.praepositionen);

    const [searchVal, setSearchVal] = useState('');

    const search = (text) => {
        let str, n;
        let results = [];
        for (let i = 0; i < params.data.length; i++) {
            str = params.data[i].title.toUpperCase().trim();
            n = str.search(text.toUpperCase().trim());
            if (n !== -1) {
                results.push(params.data[i]);
            }
        }
        if (results[0] !== undefined) {
            setDataList(results);
        } else {
            setDataList(params.data);
        }
    }


    function listSelect(list, item) {
        if (list == 'AdjMitPro' || list == 'verbMitPro') {
            return (
                <Text style={styles.ListBtnText} >{item.title}{praepositionen[Number(item.answer)].title}</Text>
            );
        } else if (list == 'NomVerbVerbin' || list == 'Brief' || list == 'Test') {
            return (
                <Text style={styles.ListBtnText} >{item.title}{item.answer}</Text>
            );
        }
    }
    return (
        <View style={styles.ListContainer} >

            {(params.help) ? <Help help={params.help} /> : null}

            <View style={[styles.searchContainer, { display: params.hideSearchBar ? 'none' : 'flex' }]} >
                <TextInput
                    style={styles.searchBox}
                    value={searchVal}
                    onChangeText={(text) => {
                        setSearchVal(text);
                        if (text == '') {
                            setDataList(params.data);
                        } else {
                            search(searchVal);
                        }
                    }}
                />
                <Pressable
                    style={styles.listBtnSearch}
                    onPress={() => { search(searchVal.toUpperCase()) }}
                >
                    <Text>&#128269;</Text>
                </Pressable>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={dataList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <Pressable style={styles.Listbtn}
                            onPress={() => {
                                if (params.flag == 'Test') {
                                    props.navigation.navigate('Test', { testId: item.id })
                                } else {
                                    props.navigation.navigate('Beispiel', { flag: params.flag, flagData: item })
                                }
                            }}
                        >
                            <View>
                                {listSelect(params.flag, item)}
                            </View>
                        </Pressable>
                    );
                }}
            />
        </View>
    );
}

export { List };

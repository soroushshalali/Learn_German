import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import data from './data.json';
import { Help } from './Help';

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
                <Text style={styles.btnText} >{item.title}{praepositionen[Number(item.answer)].title}</Text>
            );
        } else if (list == 'NomVerbVerbin' || list == 'Brief' || list == 'Test') {
            return (
                <Text style={styles.btnText} >{item.title}{item.answer}</Text>
            );
        }
    }
    return (
        <View style={styles.container} >

            {(params.help) ? <Help help={params.help} /> : null}

            <View style={[styles.searchContainer , {display: params.hideSearchBar ? 'none' : 'flex' }]} >
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
                    style={styles.searchBtn}
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
                        <Pressable style={styles.btn}
                            onPress={() => {
                                if (params.flag == 'Test') {
                                    props.navigation.navigate('Test', { testId: item.id })
                                } else {
                                    props.navigation.navigate('Beispiel', { flag: params.flag, flagData: params.data[item.id] })
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        position: 'relative'
    },
    btn: {
        backgroundColor: "rgb(100, 100, 255)",
        paddingHorizontal: 5,
        borderRadius: 5,
        marginVertical: 10,
        width: 285,
        height: 70,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 2,
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        letterSpacing: 1
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop:10
    },
    searchBox: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        flex: 10,
        height: '100%'
    },
    searchBtn: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        height: '100%',
        alignItems: 'center',
        paddingTop: '5%',
    },
});
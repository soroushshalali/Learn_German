import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import data from './data.json'
import {styles} from './styleCss'

const ShowResult = (props) => {
    const dataSelect = (id) => {
        if (id == 0) {
            return data.NomVerbVerbin;
        } else if (id == 1) {
            return data.AdjMitPro;
        } else if (id == 2) {
            return data.verbMitPro;
        }
    }
    const flatList = () => {
        if (props.falseAnswers) {
            return (
                <View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={props.falseAnswers}
                        keyExtractor={item => item.toString()}
                        renderItem={({ item }) => {
                            return (
                                <Pressable style={styles.ShowResultbtn}
                                    onPress={() => props.navigation.navigate('Beispiel', { flagData: dataTest[item] })}
                                >
                                    <View>
                                        <Text style={styles.ShowResultbtnText} >{dataTest[item].title}</Text>
                                    </View>
                                </Pressable>
                            );
                        }}
                    />
                </View>
            );
        }
    }

    const [dataTest, setDataTest] = useState(dataSelect(props.route.params.testId));
    return (
        <View style={styles.container} >
            <View style={styles.Testquestion} >
                <Text style={[styles.TestquestionText,{textAlign: 'center' , fontSize:30}]} >{props.correctCounter} / 10</Text>
            </View>
            {flatList()}
        </View>
    );
}

export { ShowResult };
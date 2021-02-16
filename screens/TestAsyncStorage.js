import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const TestAsyncStorage = () => {
    const [text, setText] = useState('...')
    // const storeData = async () => {
    //     try {
    //         await AsyncStorage.setItem('key_11', 'soroush')
    //     } catch (e) {
    //         console.log('saving error')
    //     }
    // }


    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('key_11')
            if (value !== null) {
                // value previously stored
                setText(value);
            }
        } catch (e) {
            // error reading value
            console.log('error reading value')
        }
    }
    getData();

    return (
        <View>
            <Text>asyncStorage</Text>
            <Text>{text}</Text>
            <Button title='storeData' onPress={() => storeData()} />
            <Button title='getData' onPress={() => getData()} />
        </View>
    );
}


export { TestAsyncStorage };
import React from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { LitnerController } from './LitnerController';
import { styles } from './styleCss';

const LitnerBox = (props) => {

    const delAll = () => {
        let realm = new LitnerController();
        realm.del_all();
    }

    return (
        <SafeAreaView style={styles.Litner_Container} >
            <View
                style={styles.addBtn_Container}>
                <Pressable
                    style={[styles.Listbtn, { width: 50, height: 20, backgroundColor: 'yellow' }]}
                    onPress={() => props.navigation.navigate('AddWord')}
                >
                    <Text style={[styles.ListBtnText, { color: 'black' }]} >+</Text>
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
            </View>
        </SafeAreaView>
    );
}


export { LitnerBox };
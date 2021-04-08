import React from 'react';
import { Text, View, StyleSheet, Pressable, Button, BackHandler } from 'react-native';
import data from './data.json';
// import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styleCss';

const Home = (props) => {

    return (
        <View style={styles.container}>
            {/* <Icon name="ios-person" size={30} color="#4F8EF7" /> */}
            <Pressable style={styles.btn}
                onPress={() => props.navigation.navigate('List', {
                    data: data.briefe,
                    flag: 'Brief',
                })}
            >
                <View>
                    <Text style={styles.btnText} >Briefe</Text>
                </View>
            </Pressable>
            <Pressable style={styles.btn}
                onPress={() => props.navigation.navigate('List', {
                    data: data.NomVerbVerbin,
                    flag: 'NomVerbVerbin',
                })}
            >
                <View>
                    <Text style={[styles.btnText, { fontSize: 17 }]} >Nomen Verb Verbindungen</Text>
                </View>
            </Pressable>
            <Pressable style={styles.btn}
                onPress={() => props.navigation.navigate('List', {
                    data: data.AdjMitPro,
                    flag: 'AdjMitPro'

                })}
            >
                <View>
                    <Text style={[styles.btnText, { fontSize: 17 }]} >Adjektive mit Präpositionen</Text>
                </View>
            </Pressable>
            <Pressable style={styles.btn}
                onPress={() => props.navigation.navigate('List', {
                    data: data.verbMitPro,
                    flag: 'verbMitPro',
                    help: true,
                })}
            >
                <View>
                    <Text style={[styles.btnText, { fontSize: 17 }]} >Verben mit Präpositionen</Text>
                </View>
            </Pressable>
            <Pressable style={styles.btn}
                onPress={() => props.navigation.navigate('List', {
                    data: data.tests,
                    flag: 'Test',
                    hideSearchBar: true,
                })}
            >
                <View>
                    <Text style={[styles.btnText, { fontSize: 17 }]} >Test</Text>
                </View>
            </Pressable>
            <Pressable style={styles.btn}
                onPress={() => props.navigation.navigate('LitnerBox')}
            >
                <View>
                    <Text style={styles.btnText} >Litner Box</Text>
                </View>
            </Pressable>
            <Pressable style={styles.btn}
                onPress={() => props.navigation.navigate('Kontakt')}
            >
                <View>
                    <Text style={styles.btnText} >Kontakt</Text>
                </View>
            </Pressable>
            <Pressable style={styles.btn}
                onPress={() => { BackHandler.exitApp() }}
            >
                <View>
                    <Text style={styles.btnText} >Exit</Text>
                </View>
            </Pressable>
        </View>
    );
};
export { Home };
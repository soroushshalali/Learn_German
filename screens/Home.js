import React from 'react';
import { Text, View, StyleSheet, Pressable, Button, BackHandler } from 'react-native';
import data from './data.json';
// import Icon from 'react-native-vector-icons/Ionicons';

const Home = (props) => {

    return (
        <View style={styles.container} >
            
            <Text>
                {/* <Icon name="ios-person" size={30} color="#4F8EF7" /> */}
            </Text>
            <Pressable style={styles.btn}
                onPress={() => props.navigation.navigate('List', { data: data.briefe, flag: 'Brief' })}
            >
                <View>
                    <Text style={styles.btnText} >Briefe</Text>
                </View>
            </Pressable>
            <Pressable style={styles.btn}
                onPress={() => props.navigation.navigate('List', {
                    data: data.NomVerbVerbin,
                    flag: 'NomVerbVerbin'
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
                onPress={() => props.navigation.navigate('List', { data: data.tests, flag: 'Test' })}
            >
                <View>
                    <Text style={[styles.btnText, { fontSize: 17 }]} >Test</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
    },
    btn: {
        backgroundColor: "rgb(100, 100, 255)",
        paddingHorizontal: 5,
        borderRadius: 30,
        marginVertical: 10,
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 50,
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        letterSpacing: 1,
        textAlign: 'center',
    },
});


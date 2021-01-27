import React from 'react';
import { Text, View, StyleSheet, Pressable, Button, BackHandler } from 'react-native';



const Home = (props) => {
    return (
        <View style={styles.container} >
            <Pressable style={styles.btn}
                onPress={() => props.navigation.navigate('Briefe')}
            >
                <View>
                    <Text style={styles.btnText} >Briefe</Text>
                </View>
            </Pressable>
            <Pressable style={styles.btn}
                onPress={() => props.navigation.navigate('Nomen Verb Verbindungen')}
            >
                <View>
                    <Text style={[styles.btnText, { fontSize: 17 }]} >Nomen Verb Verbindungen</Text>
                </View>
            </Pressable>
            <Pressable style={styles.btn}
                onPress={() => props.navigation.navigate('Adjektive mit Präposition')}
            >
                <View>
                    <Text style={[styles.btnText, { fontSize: 17 }]} >Adjektive mit Pröpositionen</Text>
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
        letterSpacing: 1
    },
});

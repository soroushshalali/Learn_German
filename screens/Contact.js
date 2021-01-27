import React from 'react';
import { Text, View, StyleSheet, Pressable, Button, Linking } from 'react-native';


const Contact = (props) => {
    return (
        <View style={styles.container} >
            <Pressable style={styles.btn}
                onPress={() => Linking.openURL('https://soroush-shalali-homepage.netlify.app/')}
            >
                <View>
                    <Text style={styles.btnText} >My HomePage</Text>
                </View>
            </Pressable>
            <Pressable style={styles.btn}
                onPress={() => Linking.openURL('mailto:soroushshalali@gmail.com')}
            // mailto:<receiver_email>?subject=<subject>&body=<body>&cc=<emails_to_copy></emails_to_copy>
            >
                <View>
                    <Text style={styles.btnText} >E-Mail</Text>
                </View>
            </Pressable>
        </View>
    );
};
export { Contact };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    btn: {
        backgroundColor: "rgb(100, 100, 100)",
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

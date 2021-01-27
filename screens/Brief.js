import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable,ScrollView } from 'react-native';
import data from './data.json'

const Brief = (props) => {
    const [brief, setBrief] = useState(data.briefe[props.route.params.id - 1]);
    return (
        <ScrollView style={styles.container} >
            <View style={styles.btn} >
                <Text style={styles.btnText} >{brief.title}</Text>
            </View>
            <View style={styles.content} >
                <Text style={styles.einleitung} >Sehr geehrte Damen und Herren,</Text>
                <Text style={styles.mainText} >{brief.content}</Text>
                <Text style={styles.einleitung} >Mit freundlichen Grüßen</Text>
            </View>
        </ScrollView>
    );
}

export { Brief };
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        padding:6
    },
    btn: {
        backgroundColor: "rgb(100, 100, 255)",
        paddingHorizontal: 5,
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
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
        fontSize: 15,
        letterSpacing: 1
    },
    einleitung: {
        marginVertical: 10,
        fontWeight: 'bold'
    },
    content: {
        padding: 5,
        backgroundColor: '#ddd',
        borderRadius: 5
    },
    mainText:{
        lineHeight:25
    }
});
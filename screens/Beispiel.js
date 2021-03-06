import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from './styleCss';

const Beispiel = (props) => {
    const [example, setExample] = useState(props.route.params.flagData);
    if (props.route.params.flag != 'Brief') {
        return (

            <ScrollView style={styles.BeispielContainer} >
                <View style={styles.BeispielBtn} >
                    <Text style={styles.BeispielBtnText} >{example.title}</Text>
                </View>
                <Text>Beispiel:</Text>
                <View style={styles.content} >
                    <Text style={styles.BeispielMainText} >{example.example}</Text>
                </View>
            </ScrollView>
        );
    } else {
        return (
            <ScrollView style={styles.BeispielContainer} >
                <View style={styles.BeispielBtn} >
                    <Text style={styles.BeispielBtnText} >{example.title}</Text>
                </View>
                <View style={styles.content} >
                    <Text style={styles.einleitung} >Sehr geehrte Damen und Herren,</Text>
                    <Text style={styles.BeispielMainText} >{example.content}</Text>
                    <Text style={styles.einleitung} >Mit freundlichen Grüßen</Text>
                </View>
            </ScrollView>
        );
    }

}

export { Beispiel };
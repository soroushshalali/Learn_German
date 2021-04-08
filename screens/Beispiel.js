import React, { useState } from 'react';
import { Text, View, ScrollView, Linking } from 'react-native';
import { styles } from './styleCss';

const Beispiel = (props) => {
    const [example, setExample] = useState(props.route.params.flagData);

    const hyperLinkHandler = () => {
        if (props.route.params.flag != 'NomVerbVerbin')
        
            return (
                <View style={styles.BeispielBtn} >
                    <Text style={[styles.BeispielBtnText,{fontSize:15 , letterSpacing:0}]}
                        onPress={() => Linking.openURL('https://de.wiktionary.org/wiki/' + example.title)}>Mehr Infos und Beispiele über {example.title}</Text>
                </View>
            );
    }

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
                {hyperLinkHandler()}
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
import React from 'react';
import { Text, View, StyleSheet, Pressable, Button, Linking } from 'react-native';
import {styles} from './styleCss'


const Contact = (props) => {
    return (
        <View style={styles.ContactContainer} >
            <Pressable style={styles.ContactBtn}
                onPress={() => Linking.openURL('https://soroush-shalali-homepage.netlify.app/')}
            >
                <View>
                    <Text style={styles.ContactBtnText} >My HomePage</Text>
                </View>
            </Pressable>
            <Pressable style={styles.ContactBtn}
                onPress={() => Linking.openURL('mailto:soroushshalali@gmail.com')}
            // mailto:<receiver_email>?subject=<subject>&body=<body>&cc=<emails_to_copy></emails_to_copy>
            >
                <View>
                    <Text style={styles.ContactBtnText} >E-Mail</Text>
                </View>
            </Pressable>
        </View>
    );
};
export { Contact };


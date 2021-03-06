import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {styles} from './styleCss'



const Help = () => {
    const [helpComponent, sethelpComponent] = useState(false);

    return (
        <View>
            <View style={styles.helpContainer}
            >
                <Pressable
                    onPress={() => sethelpComponent(!helpComponent)}
                    style={styles.helpBtn}
                >
                    <Text style={styles.helpText} >&#9783;</Text>
                </Pressable>
            </View>
            <View style={[styles.helpComponent, { top: helpComponent ? '10%' : '-500%' }]} >
                <Text style={{ color: '#fff' }} >
                    etw = Sache + Akkusativ{'\n'}
                jdn = Person + Akkusativ{'\n'}
                s. = Reflexivpronomen + Akkusativ{'\n'}
                jdm = Person + Dativ{'\n'}
                s. = Reflexivpronomen + Dativ{'\n'}
                </Text>
            </View>
        </View>
    );
}
export { Help };
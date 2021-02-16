import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';



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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        position: 'relative'
    },
    helpContainer: {
        marginVertical: 5,
        width: 285,
        alignItems: 'flex-end',
    },
    helpBtn: {
        backgroundColor: '#aaa',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    helpText: {
        color: 'red',
        fontSize: 25,
        fontWeight: '900'
    },
    helpComponent: {
        left: '5%',
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'rgba(37, 37, 70, 0.808)',
        padding: 5,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 50,
    },
});
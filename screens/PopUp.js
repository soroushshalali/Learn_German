import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { styles } from './styleCss'

const PopUp = () => {
    const [display, setdisplay] = useState('flex')

    useEffect(() => {
        setTimeout(() => {
           setdisplay('none')
        }, 3000);
    })

    return (
        <View style={[styles.container, { display: display }]} >
            <View style={styles.popUp} >
                <Text style={styles.popUpText} >asdasd</Text>
            </View>
        </View>
    );
}

export { PopUp };
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(172, 172, 172, 0.76)',
        borderRadius: 5,
        height: 50,
        justifyContent: 'center'
    },
    popUp: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    popUpText: {

    }

});
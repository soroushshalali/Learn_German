import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated, Easing } from 'react-native';

const animation = () => {
    const [animatedValue, setAnimatedValue] = useState('')
    const [animatedStyle, setAnimatedStyle] = useState({ opacity: animatedValue })

    useEffect(() => {
        setAnimatedValue(new Animated.Value(1));
    })

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Animated.View style={[styles.box, animatedStyle]} ></Animated.View>
        </View>
    );
}

export { animation };
const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        opacity
    }
});
import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const List = (props) => {
    console.log(props.linkEx)
    return (
        <View style={styles.container} >
            <FlatList
                showsVerticalScrollIndicator={false}
                data={props.data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <Pressable style={styles.btn}
                            onPress={() => props.navigation.navigate(props.linkEx, { id: item.id })}
                        >
                            <View>
                                <Text style={styles.btnText} >{item.title}</Text>
                            </View>
                        </Pressable>
                    );
                }}
            />
        </View>
    );
}

export { List };
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
        borderRadius: 5,
        marginVertical: 10,
        width: 270,
        height: 70,
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
        fontSize: 20,
        letterSpacing: 1
    },
});
import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';

let result = false;
const SearchInList = (props) => {

    const [searchVal, setSearchVal] = useState('');
    const [dataList, setDataList] = useState(props.data);

    const search = (text) => {
        // let results = [];
        let results = -1;
            for (let i = 0; i < dataList.length ; i++) {
                if (dataList[i]['title'].toUpperCase() == text) {
                    // results.push(dataList[i].id);
                    results = i;
                }
            }
            if (results != -1) {
                setDataList([dataList[results]]);
                result=[dataList[2]];
            }
    }
    return (
        <View>
            <View>
                <Text>Search in List</Text>
                <TextInput
                    style={{ backgroundColor: 'red' }}
                    value={searchVal}
                    onChangeText={(text) => {
                        setSearchVal(text);
                    }}
                />
                <Text>{searchVal}</Text>
            </View>
            <Pressable
                style={{ borderWidth: 2 }}
                // onPress={() => { search(searchVal.toUpperCase()) }}
                onPress={()=>{
                    props.func('child');
                }}
            >
                <Text>search</Text>
            </Pressable>
        </View>
    );
}
export { SearchInList, result };
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerlimit, setLowerlimit] = useState(0);
  const [upperlimit, setUpperlimit] = useState(0);

  useEffect(() => {
    if(age !== ''){
      const ageNumber = parseFloat(age);
      const lowerLimitResult = (220 - ageNumber) * 0.65;
      setLowerlimit(lowerLimitResult.toFixed(0));
      const upperLimitResult = (220 - ageNumber) * 0.85;
      setUpperlimit(upperLimitResult.toFixed(0));
    }
  }, [age]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Age</Text>
      <TextInput 
        keyboardType='decimal-pad' 
        value={age} 
        onChangeText={text => setAge(text)}
      />
      <Text style={styles.text}>Hr Limits</Text>
      <Text>{lowerlimit} - {upperlimit}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
  },
});

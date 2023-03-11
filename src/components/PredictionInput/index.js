import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TextInputExample = ({text, onChangeText, numberOfPredictions, totalPredictions}) => {

  return (
    <div>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder= {`Predict ${numberOfPredictions + 1} of ${totalPredictions} `}
        />
      </SafeAreaView>
    </div>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;


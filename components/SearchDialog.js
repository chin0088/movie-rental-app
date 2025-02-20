import { useState } from 'react';
import { Button, Dialog, Input } from '@rneui/themed';
import { Text, View, StyleSheet, Alert } from 'react-native';

//code ref: https://reactnativeelements.com/docs/components/dialog


export default function SearchDialog({isVisible, onSearch, onClose }) {
const [inputText, setInputText] = useState('');


const handleSearch = () => {
  if (!inputText.trim()) {
    //show an alert to to ask user to input a keyword
    Alert.alert('Please input a keyword', '', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  } else {
    onSearch(inputText); //pass search query to runSearch
    setInputText(''); //reset input field
    onClose(); // close the dialog & setSearchOpen(false)
  }

};

return (
  <View>
    <Dialog
      isVisible={isVisible}
      onBackdropPress={onClose}
    >
      <Dialog.Title title="Search a movie"/>
      <Input
          placeholder="keyword"
          onChangeText={setInputText}
          value={inputText}
        />
        <Button title="Search"
        onPress={handleSearch}
        />
      <Button title="Cancel" 
      onPress={onClose}/>
    </Dialog>
  </View>
);
};

const styles = StyleSheet.create({
button: {
  borderRadius: 10,
  width: 220,
  margin: 20,
},
buttonContainer: {
  margin: 20,
  justifyContent: 'center',
  alignItems: 'center',
},
});

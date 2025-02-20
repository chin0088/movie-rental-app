import { useState } from 'react';
import { Button, Dialog, Input } from '@rneui/themed';
import { Text, View, StyleSheet } from 'react-native';

export default function RentalDialog({isVisible, movie, toConfirm, onClose }) {
// const [inputText, setInputText] = useState('');
    const movPrice = (Math.random() * 8.88).toFixed(2);



return (
  <View>
    <Dialog
      isVisible={isVisible}
      onBackdropPress={onClose}
    >
      <Dialog.Title title="Confirm to rent movie"/>
      <Dialog.Title title={movie?.title}/>
      <Text>Release Date: {movie?.release_date}</Text>
      <Text>Rental Price: ${movPrice}</Text>
      
      <Button title="Confirm" 
      onPress={()=> {
        toConfirm(movie);
        onClose();
      }}/>
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
